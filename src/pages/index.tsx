import React from "react";
import styled from "@emotion/styled";

import Layout from "@components/Layout";
import IndexHero from "../components/index/Index.Hero";
import IndexSection from "../components/index/Index.Section";
import IndexBox, { BoxContainer } from "../components/index/Index.Box";
import ContactMeta from "@components/meta/ContactMeta";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBooth,
  faCheck,
  faFlagUsa,
  faMailBulk,
  faCalendarCheck,
  faNewspaper,
  faArrowRight,
  faCommentDots,
  faInfoCircle, 
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";

import { red, yellow, orange, purple, blue } from "../colors";

import MailBox from "../..//static/mail-box.svg";


const BigImage = styled.div`
  display: flex;
  @media (max-width: 420px) {
    display: none;
  }
`

const Index = () => {
  return (
    <Layout>
      <IndexHero />
      <IndexSection title={"Our Plan"}>
        <p>We are nonpartisan movement built on the simple idea that elections must reflect the will of the people and that can only happen if we <strong>Count Every Vote</strong>. We need to know that every eligible voter will have the opportunity to vote without restriction and that every vote will be counted.</p>

        <BoxContainer>
          <IndexBox
            icon={faPersonBooth}
            iconColor={blue}
            title="Voters"
          >
            <p>Connecting voters and activists with resources to mobilize and ensure state officials <strong>Count Every Vote.</p>
          </IndexBox>

          <IndexBox
            icon={faCheck}
            iconColor={yellow}
            title="Journalists"
          >
            <p>Providing resources and guidance to support accurate and balanced coverage as states complete their counts.</p>
          </IndexBox>

          <IndexBox
            icon={faFlagUsa}
            iconColor={red}
            title="Data"
          >
            <p>Visualizing the vote count with data and context to make sense of the counting process.</p>
          </IndexBox>
        </BoxContainer>
      </IndexSection>

      <IndexSection title={"An Election Like No Other"}>
        <p>COVID-19 and a historically divided electorate increase the likliehood that counting votes will take longer than past elections and could be contested. We need to be prepared to share accurate information and take action until every vote is counted.</p>
      
        <div style={{display: "flex"}}>
          <BoxContainer column>
            <IndexBox
              icon={faMailBulk}
              iconColor={purple}
              title="Mail-in Voting"
            >
              <p>Twice as many people will be voting by mail this election putting pressure on the postal service and election officials.</p>
            </IndexBox>

            <IndexBox
              icon={faCalendarCheck}
              iconColor={orange}
              title="Delayed Results"
            >
              <p>Many states are prohibited by law from counting mail-in ballots until Election Day and some will receive ballots up to 10 days after Nov. 3.</p>
            </IndexBox>

            <IndexBox
              icon={faNewspaper}
              iconColor={red}
              title="Media Responsibility"
            >
              <p>That means media will needs to prepare people for a protracted election and cover Election Night responsibly.</p>
            </IndexBox>
          </BoxContainer>

          <BigImage>
            <img src={MailBox} style={{width: "100%"}} />
          </BigImage>
        </div>
      </IndexSection>

      <IndexSection title={"How to Protect the Election"}>
        <BoxContainer>
          <IndexBox
            icon={faArrowRight}
            iconColor={red}
            title="Prepare to Act"
            column
            shadow
          >
            <p><a href="https://www.getrevue.co/profile/countvotes">Sign-up and get connected</a> with groups preparing to take action in your community.</p>
          </IndexBox>

          <IndexBox
            icon={faCommentDots}
            iconColor={red}
            title="Speak Up"
            column
            shadow
          >
            <p>Share the Count Every Vote message on social media and in your local press.</p>
          </IndexBox>
        </BoxContainer>
        <BoxContainer>
          <IndexBox
            icon={faInfoCircle}
            iconColor={yellow}
            title="Stay Informed"
            column
            shadow
          >
            <p>Get breaking updates from our team of researchers monitoring the 2020 Election.</p>
          </IndexBox>

          <IndexBox
            icon={faChalkboard}
            iconColor={yellow}
            title="Monitor"
            column
            shadow
          >
            <p><a href="https://www.getrevue.co/profile/vote"><strong>Get breaking updates</strong></a> from our team of researchers monitoring the 2020 Election.</p>
          </IndexBox>
        </BoxContainer>

      </IndexSection>
    </Layout>
  );
};

export default Index;
