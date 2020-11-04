import React from "react";
import moment from 'moment';
import styled from "@emotion/styled";

import { HorizontalBar } from 'react-chartjs-2';
import { white, red, yellow, orange, purple, blue } from "../../colors";
import { parseFromString, pctFormat }  from "../../utils";

const LABELS = {
  in_person_early_2020: {s: 'In Person Early Votes', c: yellow},
  mail_accept_2020: {s: 'Mail Votes', c: purple},
  in_person_2020: {s: 'In Person Votes', c: "green"},
  // total_ballots_2020: {s: 'Total Ballots 2020', c: "green"},
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ChartWrapper = styled.div`
  display: inline-block;
  height: 150;
  width: 80%;
  @media (max-width: 420px) {
    width: 100%;
  }
  margin-top: 20;
`

const BigPct = styled.span`
  font-size: 1.15em;
  font-weight: bold;
`

const StateBar = ({state, title, electProject, vep, enip}) => {
  let LATEST_ELECTPROJECT = electProject[electProject.length-1]
  let LATEST_ENIP = enip[enip.length-1]

  var chartData = {
    labels: ['2020']
  };
  chartData.datasets = Object.keys(LABELS).map((l) => (
    {
      stack: l.split('_').pop(),
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

    // extract in_person_early_2020 from total_early and mail_accept_2020
    row['in_person_early_2020'] = parseFromString(row['total_early_2020']) - parseFromString(row['mail_accept_2020'])
    row['total_ballots_2020'] = parseFromString(row['total_early_2020']) + parseFromString(row['in_person_2020'])
    // get in_person_2020 from enip
    if (row['report_date'] === "11/3/2020") {
      row['in_person_2020'] = parseFromString(LATEST_ENIP.eday_p || '0')
    } else {
     row['in_person_2020'] = 0 
    }

    Object.keys(row).forEach((key) => {
      if (LABELS[key]) {
        let label = LABELS[key].s;
        let d = row[key]
        let s = chartData.datasets.find((s) => (s.label === label))
        // only keep the largest number
        if (parseInt(d) > (s.data[s.data.length] || 0)) {
          s.data = [d]
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
          /*type: 'time',
          time: {
              unit: 'day'
          },*/
          // if we do this, the display looks off
          stacked: true,
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              // just show short date here, to match State.Chart xAxes
              return [moment(value, 'LL').format('MMM D')] ;
            }
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
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

  // calculate turnout percentages

  // parse VEP string to int
  let TOTAL_VEP = parseFromString(vep[0]['Voting_Eligible_Population__VEP_'])

  let ELECTPROJECT_2020 = LATEST_ELECTPROJECT.total_ballots_2020
  let TOTAL_2016 = LATEST_ELECTPROJECT.total_ballots_2016
  chartData.labels = [moment(LATEST_ELECTPROJECT.report_date, 'M/D/YYYY').format('LL')]
 
  let TOTAL_2020 = ELECTPROJECT_2020 + parseFromString(LATEST_ENIP.eday_p)

  let PCT_2016 = TOTAL_2020 / TOTAL_2016
  let PCT_VEP = TOTAL_2020 / TOTAL_VEP

  return (<>
    <h2>{title}</h2>
    <FlexWrapper>
      <ChartWrapper>
        <HorizontalBar data={chartData} options={chartOptions} />
      </ChartWrapper>
      <div>
        <div><BigPct>{TOTAL_2020.toLocaleString()}</BigPct> votes cast</div>
        <div><BigPct>{pctFormat(PCT_2016)}</BigPct> of 2016 Turnout</div>
        <div><BigPct>{pctFormat(PCT_VEP)}</BigPct> of 2020 Voting Population</div>
      </div>
    </FlexWrapper>
  </>);
};

export default StateBar;
