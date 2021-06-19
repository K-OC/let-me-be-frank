import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div``;

export default App;
