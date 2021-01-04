import { sumDoseX, filterByAreaITA, replaceArea } from "./utils";

const sommVaxSummaryURL = "data/somministrazioni-vaccini-summary-latest.json";
const sommVaxDetailURL = "data/somministrazioni-vaccini-latest.json";
const consegneVaxSummaryURL = "data/consegne-vaccini-summary-latest.json";

const elaborate = (data) => {
  console.log(data);
  const timestamp = data.dataConsegneVaxSummary.data.slice(0, 1)[0].data;
  const tot = data.dataSommVaxSummary.data
    .filter(filterByAreaITA)
    .reduce(sumDoseX("totale"), 0);
  const deliverySummary = data.dataConsegneVaxSummary.data.map(replaceArea);
  //   //   const tot2 = data.reduce(sumDoseXY("TML_DOSE_1", "TML_DOSE_2"), 0);
  //   const areasRAW = data.reduce(aggrBy("TML_AREA"), {});
  //   const tot_m = data.reduce(sumDoseX("TML_SESSO_M"), 0);
  //   const tot_f = data.reduce(sumDoseX("TML_SESSO_F"), 0);
  //   const areas = mapBy(areasRAW);
  //   const fascia1619 = data.filter(filterByAge("16-19"));
  //   const fascia2029 = data.filter(filterByAge("20-29"));
  //   const totfascia1619 = fascia1619.reduce(sumDose, 0);
  //   const totfascia2029 = fascia2029.reduce(sumDose, 0);

  //   const sum = {
  //     timestamp,
  //     tot,
  //     tot_m,
  //     tot_f,
  //     areas,
  //     totfascia1619,
  //     totfascia2029,
  //   };
  //   console.log(sum);
  console.log(deliverySummary);
  return { timestamp, tot, deliverySummary };
};

export const loadData = async () => {
  const resSommVaxSummary = await fetch(sommVaxSummaryURL);
  const resSommVaxDetail = await fetch(sommVaxDetailURL);
  const resConsegneVaxSummary = await fetch(consegneVaxSummaryURL);

  const dataSommVaxSummary = await resSommVaxSummary.json();
  const dataSommVaxDetail = await resSommVaxDetail.json();
  const dataConsegneVaxSummary = await resConsegneVaxSummary.json();

  return elaborate({
    dataSommVaxSummary,
    dataSommVaxDetail,
    dataConsegneVaxSummary,
  });
};
