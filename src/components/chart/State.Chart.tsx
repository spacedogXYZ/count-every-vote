import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import { Line } from 'react-chartjs-2';
import { white, red, yellow, orange, purple, blue } from "../../colors";

const LABELS = {
  total_early_2020: {s: 'Total Early Votes', c: red},
  in_person_2020: {s: 'In Person Votes', c: yellow},
  mail_accept_2020: {s: 'Mail Ballots Accepted', c: purple},
  mail_reject_2020: {s: 'Mail Ballots Rejected', c: orange},
  mail_sent_req_2020: {s: 'Mail Ballots Requested', c: blue},
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
  var chartData = {};
  chartData.datasets = Object.keys(LABELS).map((l) => (
    {
      label: LABELS[l].s,
      borderColor: LABELS[l].c,
      fill: false,
      data: [],
    }
  ));

  electProject.forEach((row) => {
    // filter here, not in query
    if (row.state !== state) {
      return;
    }
    Object.keys(row).forEach((key) => {
      if (LABELS[key]) {
        let label = LABELS[key].s;
        let d = {
          x: row['report_date'],
          y: row[key]
        }
        let s = chartData.datasets.find((s) => (s.label === label))
        if (d.y && d.y !== "0") {
          s.data.push(d)
        }
      }
    })
  });

  const chartOptions = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
              unit: 'day'
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
                return Number(value).toLocaleString();
            }
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          if (label) {
              label += ': ';
          }
          label +=  Number(tooltipItem.yLabel).toLocaleString();
          return label;
        }
      }
    }
  }

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
        <Line data={chartData} options={chartOptions} />
      </div>
  );
};

export default StateChart;
