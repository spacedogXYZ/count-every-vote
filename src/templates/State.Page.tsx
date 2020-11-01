import React from "react";
import { graphql, Link } from 'gatsby'
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Section from "@components/Section";
import StateChart from "../components/chart/State.Chart";

const DataPage = ({data, pageContext}) => {
  let dataSource = data.allElectprojectCsv.nodes[0].source;
  let pageLink = data.ghostPage && data.ghostPage.slug;

  return (
    <Layout>
      <Section relative id="Data__Section">
        <StateChart state={pageContext.state} title={pageContext.title} electProject={data.allElectprojectCsv.nodes}/>
      </Section>
      <Section>
        <p>Data processed by Michael McDonald,
        <a href="https://electproject.github.io/Early-Vote-2020G/index.html">United States Elections Project, CC-SA 2020</a>.{' '}
        { dataSource.startsWith("http")
          ? ( <a href={dataSource}>Official Source</a> ) 
          : ( <span>{dataSource}</span> )
        }.
        </p>
      </Section>
      { pageLink && (
        <Section relative>
          <p><Link to={`/${pageLink}`}>More about {pageContext.title} Counts</Link></p>
        </Section>
      )}
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
        }
      }

      ghostPage(slug: {eq: $countSlug}) {
        id
        slug
      }
    }
  `;
