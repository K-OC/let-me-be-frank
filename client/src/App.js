import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import { Footer } from "./components/Footer";
import { ListingGrid } from "./components/ListingGrid";
import { About } from "./components/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path="/" exact>
              <ListingGrid />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export default App;
