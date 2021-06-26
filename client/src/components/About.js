import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Why would you do this?</StyledTitle>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-family: var(--header-font);
  color: black;
  margin-top: 50%;
`;
