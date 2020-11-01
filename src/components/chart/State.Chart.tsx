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

const StateChart = ({state, title, electProject}) => {
  // electProject is organized as a row for each state date
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
    // filter on state here, just to be sure
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
          // check for an existing data point for same day
          let dupe = s.data.find((x) => (x.x === d.x))
          if (dupe) {
            if (d.y >= dupe.y) {
              s.data.pop() // remove the smaller
              s.data.push(d)
            }
          } else {
            s.data.push(d)
          }
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
            autoSkip: true,
            autoSkipPadding: 50,
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
        width: '100%',
        display: 'inline-block',
        minHeight: 300,
        marginTop: 20
       }}
     >
        <h2>{title}</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
  );
};

export default StateChart;
