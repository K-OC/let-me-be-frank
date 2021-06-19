import React from "react";
import styled from "styled-components";
import { FaHotdog } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <FaHotdog />
          Let Me Be Frank
        </Title>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
export default Header;
