import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Section from "@components/Section";

import IndexBox, { BoxContainer } from "../components/index/Index.Box";
import IndexSection from "../components/index/Index.Section";

import {
  faChartBar,
  faHourglassHalf,

} from "@fortawesome/free-solid-svg-icons";
import { yellow, orange } from "../colors";

const DataPage = () => {
  return (
    <Layout>
      <IndexSection title="State Counting Guide">
        <IndexBox
          icon={faChartBar}
          iconColor={yellow}
          title="Data"
        >
          See how many votes are outstanding in states likely to decide the presidency.
        </IndexBox>

        <IndexBox
          icon={faHourglassHalf}
          iconColor={orange}
          title="Timeline"
        >
          Know the counting timeline for critical states.
        </IndexBox>

        <p>Results on Election Day are projections and represent a sampling of precincts that are counted as the night goes on.
        US election law gives states up to five weeks to complete the count and certify results.</p>

        <p>We are used to knowing the results of national races, specifically the presidency, on the night of the election.
        COVID-19 has lead to an increase in early votes and mail-in ballots that could delay even the preliminary results.</p>

        <p>The Vote Counts State guide provides insight into the counting deadlines of battleground states.</p>

        <ul>
          <li><Link to={"FL"}>Florida</Link></li>
          <li><Link to={"GA"}>Georgia</Link></li>
          <li><Link to={"MI"}>Michigan</Link></li>
          <li><Link to={"OH"}>Ohio</Link></li>
          <li><Link to={"PA"}>Pennsylvania</Link></li>
          <li><Link to={"TX"}>Texas</Link></li>
          <li><Link to={"WI"}>Wisconsin</Link></li>
        </ul>
      </IndexSection>
    </Layout>
  );
};

export default DataPage;
