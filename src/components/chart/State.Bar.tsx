import React from "react";
import styled from "@emotion/styled";

import { HorizontalBar } from 'react-chartjs-2';
import { white, red, yellow, orange, purple, blue } from "../../colors";

const LABELS = {
  in_person_2020: {s: 'In Person Votes 2020', c: yellow},
  total_early_2020: {s: 'Total Early Votes 2020', c: red},
  total_ballots_2016: {s: 'Total Ballots 2016', c: "green"},
};

const ChartWrapper = styled.div`
  display: inline-block;
`

const StateBar = ({state, title, electProject}) => {
  var chartData = {};
  chartData.datasets = Object.keys(LABELS).map((l) => (
    {
      label: LABELS[l].s,
      backgroundColor: LABELS[l].c,
      fill: true,
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
        let d = row[key]
        let s = chartData.datasets.find((s) => (s.label === label))
        // only keep the largest number
        if (parseInt(d) > (s.data[s.data.length] || 0)) {
          s.data = [d]
          chartData['labels'] = [row['report_date']]
        }
      }
    })
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
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
          label +=  Number(tooltipItem.xLabel).toLocaleString();
          return label;
        }
      }
    }
}

  return (
    <div
       style={{
        width: '100%',
        display: 'block',
        position: 'relative',
        height: 150,
        marginTop: 20
       }}
     >
        <h2>{title}</h2>
        <HorizontalBar data={chartData} options={chartOptions} />
      </div>
  );
};

export default StateBar;
