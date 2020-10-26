import React from "react";
import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndexBox: React.FC = ({ title, icon, iconColor, shadow, column, children }) => {
  return (
    <BoxWrapper shadow={shadow} column={column}>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} size="3x" color={iconColor} />
      </IconWrapper>
      <ChildrenWrapper>
        <BoxHeading>{title}</BoxHeading>
        {children}
      </ChildrenWrapper>
    </BoxWrapper>
  );
};

export default IndexBox;

export const BoxContainer = styled.div`
  min-width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  @media (max-width: 420px) {
    flex-direction: column;
  }
  flex-direction: ${props =>
      props.column ? 'column' : 'row'};
  margin: 2rem 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  @media (min-width: 420px) {
    max-width: 75%;
  }
  margin: 0 2rem 2rem 0; 
  padding: 2rem;
  border: ${props =>
    props.shadow ? '1px solid #f1f2f3' : 'none'};
  box-shadow: ${props =>
    props.shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'};
  flex-direction: ${props =>
    props.column ? 'column' : 'row'};
  @media (max-width: 420px) {
    flex-direction: row;
  }
`;

const IconWrapper = styled.div`
  margin: 0 1.5rem 1.5rem 0;
`;

const BoxHeading = styled.h3`
  font-style: normal;
  font-weight: var(--system-font-semibold);
  font-size: 18px;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  color: ${(p) => p.theme.colors.primary};

  a {
    color: ${(p) => p.theme.colors.accent};
  }
`;

const ChildrenWrapper = styled.div`
`;