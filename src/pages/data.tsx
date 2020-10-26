import React from "react";
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Section from "@components/Section";
import StateChart from "../components/chart/State.Chart";

const DataPage = () => {
  return (
    <Layout>
      <Section relative id="Data__Section">
        <StateChart state="FL" title="Florida" />
        <StateChart state="GA" title="Georgia" />
        <StateChart state="MI" title="Michigan" />
        <StateChart state="OH" title="Ohio" />
        <StateChart state="PA" title="Pennsylvania" />
        <StateChart state="TX" title="Texas" />
        <StateChart state="WI" title="Wisconsin" />
      </Section>
      <Section>
        <p>State data processed by Michael McDonald, <a href="https://electproject.github.io/Early-Vote-2020G/index.html">United States Elections Project, CC-SA 2020</a></p>
      </Section>
    </Layout>
  );
};

export default DataPage;
