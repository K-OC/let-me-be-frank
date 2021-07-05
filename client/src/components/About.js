import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Why would you do this?</StyledTitle>
        <StyledPee>
          Let Me Be Frank is a product of the developer's fandom of the{" "}
          <StyledRedirect to="https://headgum.com/doughboys">
            doughboys podcast
          </StyledRedirect>
          . On the show, there is a recurring segment called Let Me Be Frank.
          The segment kicks off with host Nick "Frank" Wiger aka The Burger Boy
          singing an increasingly elaborate theme song. Following this, host
          Mike "Spoon Man" Mitchell aka Mitch aka Mr. Slice googles "hot dog" or
          "hot dogs", or "hut dogs", and then feeds Nick and the guest some hot
          dog news. This project uses NewsOrg Api to scrape news about hot dogs.
          The search terms used are "hot-dog", "hotdogs", "hot-dogs", "sausage"
          and "hotdog". Search terms are specifically found in the title of the
          article. As it stands, this website cannot be hosted as the API is not
          free for production, making this project as pointless as the doughboys
          themselves.
        </StyledPee>
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
const StyledPee = styled.p``;
const StyledRedirect = styled.a``;
