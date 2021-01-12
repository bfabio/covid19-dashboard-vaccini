import { React, useEffect } from "react";
import $ from "jquery";
import DataTable from "datatables.net";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";

$.DataTable = DataTable;
const columns = [
  { title: "Regioni", data: "area" },
  { title: "Somministrazioni", data: "dosi_somministrate" },
  { title: "Consegne", data: "dosi_consegnate" },
  { title: "%", data: "percentuale_somministrazione" },
];

export const Table = (props) => {
  useEffect(() => {
    const table = $("#datatable")
      .find("table")
      .DataTable({
        dom:
          "<'row'<'col-sm-12 col-md-12'lf>>" +
          "<'row'<'col-sm-12'tr>>",
        language: {
          search: "Cerca"
        },
        paging: false,
        searching: true,
        destroy: true,
        data: props.summary?.deliverySummary || [],
        columns,
      });
    if (props?.selected?.area) {
      table.search(props.selected.area).draw();
    } else {
      table.search(" ").draw();
    }
  });
  return (
    <div id="datatable">
      <table
        className="table table-borderless compact table-striped table-hover table-responsive-sm"
        cellSpacing="0"
        width="100%"
      />
    </div>
  );
};
