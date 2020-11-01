import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import Section from "@components/Section";
import Icons from "@icons";
import mediaqueries from "@styles/media";

const IndexSection: React.FC = ({ title, children }) => {
  return (
    <Section relative id="Index__Section">
      <SectionHeading>{title}</SectionHeading>
      {children}
    </Section>
  );
};

export default IndexSection;

const SectionHeading = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: var(--system-font-semibold);
  font-size: 36px;
  line-height: 1.15;
  margin-bottom: 4rem;
  color: ${(p) => p.theme.colors.primary};

  a {
    color: ${(p) => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
    margin-bottom: 2rem;
  `}
`;
