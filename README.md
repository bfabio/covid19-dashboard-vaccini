[![License](https://img.shields.io/github/license/italia/covid19-dashboard-vaccini.svg)](https://github.com/italia/covid19-dashboard-vaccini/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/italia/covid19-dashboard-vaccini.svg)](https://github.com/italia/covid19-dashboard-vaccini/issues)
[![Join the #website channel](https://img.shields.io/badge/Slack%20channel-%23website-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)
![GH Action](https://github.com/italia/covid19-dashboard-vaccini/workflows/CD/badge.svg)

# COVID-19 Dashboard Vaccini Example
> This is an example repository, if you are looking for the official one please
> see
> [here](https://github.com/italia/report-vaccini-anti-covid-19)


## Forks

* [Official Report Vaccini Anti
  Covid-19](https://github.com/italia/report-vaccini-anti-covid-19)
  - Maintained by the Italian Commissario straordinario per l'emergenza
Covid-19 development team.

## Introduction

This repository contains an example web app built using FOSS solutions. This is
a standalone app currently deployed via GH pages and it does not represent the
official dashboard. 

The app uses the [opendata](https://github.com/italia/covid19-opendata-vaccini)
made available by the Italian Commissario straordinario per l'emergenza
Covid-19. 

Every contribution to this example is welcome, feel free to open issues and submit
a pull request at any time. If you find any issue while browsing the [official
website](https://www.governo.it/it/cscovid19/report-vaccini/) please refer to
[this repo](https://github.com/italia/report-vaccini-anti-covid-19).

## Technologies

This web app is based on the ReactJS framework. In particular, the Italian
[Design React Kit](https://github.com/italia/design-react-kit) has been used to
bootstrap the structure. As such, it features [Bootstrap
Italia](https://italia.github.io/bootstrap-italia/).

The main library used to show plots is [D3.js](https://d3js.org/). Also,
[Datatables](https://datatables.net/) is been used.

## Development
### Local Dev

Install all dependencies and start
```bash
$ yarn install
$ yarn start
```

### Local Prod

Install all dependencies and build
```bash
$ yarn install
$ yarn build
```
Then `./dist` will be ready to be served.

# License

Copyright (c) 2021 Presidenza del Consiglio dei Ministri

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
details.

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see https://www.gnu.org/licenses/.
