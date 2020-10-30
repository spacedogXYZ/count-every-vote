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
import StateSVG from "../../static/images/states.inline.svg";
import { yellow, orange } from "../colors";

const StateIconWrapper = styled.div`
  color: ${props => props.color || 'black'};
  svg {
    stroke-width: 1.25;
    stroke: currentColor;
    fill: none;
  }
`;

const StateIcon = ({id}) => (
  <StateIconWrapper>
    <svg>
      <use href={`#icon-state-${id}`}></use>
    </svg>
  </StateIconWrapper>
)

const StateHeader = styled.h3`
  color: ${props => props.color || 'black'};
  text-align: center;
`;

const StateLink = ({id, title}) => (
  <Link to={`/data/${id}`}>
    <StateIcon id={id} />
    <StateHeader>{title}</StateHeader>
  </Link>
)


const DataPage = () => {
  return (
    <Layout>
      <StateSVG />
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

        <BoxContainer>
          <p>Results on Election Day are projections and represent a sampling of precincts that are counted as the night goes on.
          US election law gives states up to five weeks to complete the count and certify results.</p>
        </BoxContainer>

        <BoxContainer>
          <p>We are used to knowing the results of national races, specifically the presidency, on the night of the election.
          COVID-19 has lead to an increase in early votes and mail-in ballots that could delay even the preliminary results.</p>
        </BoxContainer>

        <BoxContainer>
          <p>The Vote Counts State guide provides insight into the counting deadlines of battleground states.</p>
        </BoxContainer>

        <BoxContainer>
          <StateLink id="FL" title="Florida" />
          <StateLink id="GA" title="Georgia" />
          <StateLink id="MI" title="Michigan" />
        </BoxContainer>
        <BoxContainer>
          <StateLink id="OH" title="Ohio" />
          <StateLink id="PA" title="Pennsylvania" />
          <StateLink id="TX" title="Texas" />
        </BoxContainer>
        <BoxContainer>
          <StateLink id="WI" title="Wisconsin" />
        </BoxContainer>
      </IndexSection>
    </Layout>
  );
};

export default DataPage;
