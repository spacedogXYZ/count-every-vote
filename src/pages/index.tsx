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

const Index = () => {
  return (
    <Layout>
      <IndexHero />
      <IndexSection title={"Free and Fair Election"}>
        <p>We need to know that every eligible voter will have the opportunity to vote without restriction and that every vote will be counted. This election must include three crucial elements:</p>

        <BoxContainer>
          <IndexBox
            icon={faPersonBooth}
            iconColor={blue}
            title="Reflect"
          >
            <p>The will of voters must be captured through an open and fair voting process.</p>
          </IndexBox>

          <IndexBox
            icon={faCheck}
            iconColor={yellow}
            title="Reliable"
          >
            <p>Voters must be able to trust that their votes will be counted completely and accurately.</p>
          </IndexBox>

          <IndexBox
            icon={faFlagUsa}
            iconColor={red}
            title="Respect"
          >
            <p>The will of the people is respected and protected by candidates and the government.</p>
          </IndexBox>
        </BoxContainer>
      </IndexSection>

      <IndexSection title={"An Election Like No Other"}>
        <p>COVID-19 and a historically divided electorate make this election incredibly unique and potentially confused.</p>
      
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

          <div style={{display: "flex"}}>
            <img src={MailBox} style={{width: "100%"}} />
          </div>
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
            <p>Sign-up and get connected with groups preparing to take action in your community.</p>
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
            <p></p>
          </IndexBox>
        </BoxContainer>

      </IndexSection>
    </Layout>
  );
};

export default Index;
