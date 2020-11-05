import React from "react";
import styled from "@emotion/styled";
import Helmet from "react-helmet";

import Layout from "@components/Layout";
import { MetaData } from "@components/meta";
import Section from "@components/Section";

const PageSection = styled(Section)`
  display: flex;
  justify-content: center;
`;

const LivePage = () => {
  return (
    <Layout>
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Helmet>
      <MetaData data={{}} location={{pathname: '/'}} />

      <PageSection>
        <a class="twitter-moment" data-width="800" href="https://twitter.com/i/moments/1324439854718005253?ref_src=twsrc%5Etfw">2020 Vote Count</a>
      </PageSection>
    </Layout>
  );
};

export default LivePage;
