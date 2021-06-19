import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import { ListingGrid } from "./components/ListingGrid";
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
          </Switch>
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
