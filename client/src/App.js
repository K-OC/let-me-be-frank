import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div``;

export default App;
