import React from "react";
import { graphql, Link } from 'gatsby'
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Section from "@components/Section";
import StateBar from "../components/chart/State.Bar";
import StateChart from "../components/chart/State.Chart";

import moment from 'moment';

const Heading = styled.h1`
  font-size: 48px;
  font-family: var(--merriweather-font);
  margin-bottom: 25px;
  line-height: 1.32;
  color: var(--theme-ui-colors-primary,#000);

  & a:visited {
    color: unset;
  }
`

const LastUpdated = styled.div`
  font-size: 18px;
  color: #73737D;
`

const HeaderSection = styled(Section)`
  max-width: 680px;
`

const DataPage = ({data, pageContext}) => {
  let LATEST_ELECTPROJECT = data.allElectprojectCsv.nodes[data.allElectprojectCsv.nodes.length-1];
  let LATEST_ENIP = data.allEnipCsv.nodes[data.allEnipCsv.nodes.length-1];

  let lastUpdate = moment(LATEST_ENIP.report_date, 'YYYY-MM-DD').format('MMMM Do, YYYY');
  // these dates come to us from ElectionProject, so we don't want to mess with their format until display
  let dataSource = LATEST_ELECTPROJECT.source;
  let pageLink = data.ghostPage && data.ghostPage.slug;

  return (
    <Layout>
      <HeaderSection>
        { pageLink && (
          <Heading><Link to={`/${pageLink}/`}>{pageContext.title} Voting Data</Link></Heading>
        )}
        <LastUpdated>Last updated: {lastUpdate}</LastUpdated>
      </HeaderSection>
      <Section id="Data__Section">
        <StateBar state={pageContext.state} title={`${pageContext.title} Ballots Cast`}
          electProject={data.allElectprojectCsv.nodes}
          enip={data.allEnipCsv.nodes}
          vep={data.allVepCsv.nodes}
        />
        <StateChart state={pageContext.state} title={`${pageContext.title} Vote Counts`}
          electProject={data.allElectprojectCsv.nodes}
        />
        <p>Data processed by Michael McDonald,
        <a href="https://electproject.github.io/Early-Vote-2020G/index.html">United States Elections Project, CC-SA 2020</a><br />
        {' and '}<a href="https://2020.dataforprogress.org">Election Night Integrity Project, &copy; Data for Progress 2020</a><br />
        { dataSource.startsWith("http")
          ? ( <a href={dataSource}>Official Sources</a> ) 
          : ( <span>{dataSource}</span> )
        }
        </p>

      </Section>
    </Layout>
  );
};

export default DataPage;

export const query = graphql`
    query StateQuery($state: String, $countSlug: String) {
      allElectprojectCsv(filter: {state: {eq: $state}}, sort: {fields: report_date}) {
        nodes {
          state
          report_date
          source
          total_early_2020
          in_person_2020
          mail_accept_2020
          mail_reject_2020
          mail_sent_req_2020
          total_ballots_2016
        }
      }

      allEnipCsv(filter: {state: {eq: $state}}) {
        nodes {
          total_votes_p
          total_votes_s
          eday_p
          eday_s
          state
          report_date
        }
      }

      allVepCsv(filter: {State: {eq: $state}}) {
        nodes {
          State
          Voting_Eligible_Population__VEP_
        }
      }

      ghostPage(slug: {eq: $countSlug}) {
        id
        slug
      }
    }
  `;
