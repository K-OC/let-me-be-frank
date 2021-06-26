import React from "react";
import styled from "styled-components";
import { FaHotdog } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <FaHotdog />
          Let Me Be Frank
        </Title>
        <Twitter
          target="blank"
          title="hot dogs on twitter"
          href="https://twitter.com/search?q=(%22hot%20dog%22%20OR%20%22hot%20OR%20dogs%22%20OR%20%22hotdog%22%20OR%20%22hotdogs%22%20OR%20%22sausages%22%20%20OR%20%22weiners%22)&src=typed_query"
        >
          <SiTwitter />
        </Twitter>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 20px solid var(--meat);
  background-color: var(--bun);
  width: 100vw;
  max-height: 10vh;
  min-height: 7rem;
  position: fixed;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: var(--darkbrown);
  padding-left: 3px;
  font-family: var(--header-font);
  min-height: 10vh;
`;

const Twitter = styled.a`
  padding-right: 3rem;
  text-decoration: none;
  font-family: var(--header-font);
  font-size: 3.5rem;
`;
export default Header;
