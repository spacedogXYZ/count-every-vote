import React from "react";
import styled from "@emotion/styled";

import { graphql, useStaticQuery } from "gatsby";

import { Chart } from "react-charts";

const LABELS = {
  total_early_2020: 'Total Early Votes',
  in_person_2020: 'In Person Votes',
  mail_accept_2020: 'Mail Ballots Accepted',
  mail_reject_2020: 'Mail Ballots Rejected',
  mail_sent_req_2020: 'Mail Ballots Requested'
};

const ChartWrapper = styled.div`
  display: inline-block;
`

const StateChart = ({state, title}) => {
  const dataQuery = graphql`
    {
      allElectprojectCsv(sort: {fields: report_date}) {
        nodes {
          state
          report_date
          source
          total_early_2020
          in_person_2020
          mail_accept_2020
          mail_reject_2020
          mail_sent_req_2020
        }
      }
    }
  `;
  const electProject = useStaticQuery(dataQuery).allElectprojectCsv.nodes;

  // this is organized as a row for each state date
  // invert so each reporting type is a series
  var seriesData = Object.keys(LABELS).map((l) => (
    {
      label: LABELS[l],
      data: [],
      curve: 'linear'
    }
  ));

  electProject.forEach((row) => {
    // filter here, not in query
    if (row.state !== state) {
      return;
    }
    Object.keys(row).forEach((key) => {
      let label = LABELS[key];
      if (label) {
        let d = {
          primary: new Date(row['report_date']),
          secondary: row[key]
        }
        let s = seriesData.find((s) => (s.label === label))
        // check for an existing data point
        let dupe = s.data.find((x) => (x.primary.toLocaleDateString() === d.primary.toLocaleDateString()))
        if (dupe) {
          if (d.secondary >= dupe.secondary) {
            s.data.pop() // remove the smaller
            s.data.push(d)
          }
        }
        if (!dupe) {
          s.data.push(d)
        }
      }
    })
  });

  const data = React.useMemo(
    () => seriesData, []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom',
        ticks: val => { console.log(val); return true; },
        // showTicks: false,
        format: val => { if (val.indexOf('PM') === -1) return val }
      },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div
       style={{
         width: '400px',
         height: '300px',
         display: 'inline-block',
         margin: 50
       }}
     >
        <h2>{title}</h2>
        <Chart data={data} axes={axes} tooltip />
      </div>
  );
};

export default StateChart;
