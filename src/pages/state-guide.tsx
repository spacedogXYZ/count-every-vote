import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import Section from "@components/Section";

import IndexBox, { BoxContainer } from "../components/index/Index.Box";
import IndexSection from "../components/index/Index.Section";

import {
  faChartBar,
  faHourglassHalf,
  faCalendarCheck,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import StateSVG from "../../static/images/states.inline.svg";
import { yellow, orange, blue, purple } from "../colors";

const StateIconWrapper = styled.div`
  color: ${props => props.color || 'black'};
  svg {
    stroke-width: 1.25;
    stroke-linejoin: round;
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
  display: block;
`;

const StateLink = ({id, title, guides}) => {
  let slug = title.replace(' ','-').toLowerCase();
  let guideLink = guides.find((g) => g.slug === slug)
  return (<div>
    <StateIcon id={id} />
    <Link to={`/${slug}/data/`}>
      <StateHeader>{title} Data</StateHeader>
    </Link>
    { guideLink && (
      <Link to={`/${guideLink.slug}/`}>
        <StateHeader>{title} Guide</StateHeader>
      </Link>
    )}
  </div>)
}


const DataPage = ({data}) => {
  let guides = data.allGhostPage.nodes;
  return (
    <Layout>
      <StateSVG />
      <IndexSection title="State Counting Guide">
        <BoxContainer>
          <IndexBox
            icon={faChartBar}
            iconColor={yellow}
            title="Data"
            width="50%"
          >
            See how many votes are outstanding in states likely to decide the presidency.
          </IndexBox>

          <IndexBox
            icon={faHourglassHalf}
            iconColor={blue}
            title="Timeline"
            width="50%"
          >
            Know the counting timeline for critical states.
          </IndexBox>
        </BoxContainer>
        <BoxContainer>
          <IndexBox
            icon={faCalendarCheck}
            iconColor={orange}
            title="Delayed Results"
          >
            Results on Election Day are projections and represent a sampling of precincts that are counted as the night goes on.
          US election law gives states up to five weeks to complete the count and certify results.
          </IndexBox>
        
          <IndexBox
            icon={faMailBulk}
            iconColor={purple}
            title="Mail-in Voting"
          >
            We are used to knowing the results of national races, specifically the presidency, on the night of the election.
          COVID-19 has lead to an increase in early votes and mail-in ballots that could delay even the preliminary results.
          </IndexBox>
        </BoxContainer>

        <BoxContainer>
          <h3 style={{width: "100%", textAlign: "center", marginBottom: "2rem"}}>
            The Vote Counts State guide provides insight into the counting deadlines of battleground states.
          </h3>
        </BoxContainer>

        <BoxContainer>
          <StateLink id="FL" title="Florida" guides={guides} />
          <StateLink id="GA" title="Georgia" guides={guides} />
          <StateLink id="MI" title="Michigan" guides={guides} />
        </BoxContainer>
        <BoxContainer>
          <StateLink id="OH" title="Ohio" guides={guides} />
          <StateLink id="PA" title="Pennsylvania" guides={guides} />
          <StateLink id="TX" title="Texas" guides={guides} />
        </BoxContainer>
        <BoxContainer>
          <StateLink id="WI" title="Wisconsin" guides={guides} />
        </BoxContainer>
      </IndexSection>
    </Layout>
  );
};

export default DataPage;

export const query = graphql`
    query StateGuidesQuery {
      allGhostPage(filter: {slug: {in: ["florida","georgia","michigan","ohio","pennsylvania","texas","wisconsin"]}}) {
        nodes {
          slug
          id
        }
      }
    }
  `;

