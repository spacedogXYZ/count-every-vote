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
  let MOST_RECENT = data.allElectprojectCsv.nodes[data.allElectprojectCsv.nodes.length-1];
  let lastUpdate = moment(MOST_RECENT.report_date, 'M/D/YYYY').format('MMMM Do, YYYY');
  // these dates come to us from ElectionProject, so we don't want to mess with their format until display
  let dataSource = MOST_RECENT.source;
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
          population={data.allVepCsv.nodes}
        />
        <StateChart state={pageContext.state} title={`${pageContext.title} Vote Counts`}
          electProject={data.allElectprojectCsv.nodes}
        />
        <p>Data processed by Michael McDonald,
        <a href="https://electproject.github.io/Early-Vote-2020G/index.html">United States Elections Project, CC-SA 2020</a>.{' '}
        { dataSource.startsWith("http")
          ? ( <a href={dataSource}>Official Source</a> ) 
          : ( <span>{dataSource}</span> )
        }.
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
