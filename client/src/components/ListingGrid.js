import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import Article from "./Article";
require("dotenv").config();
const API_KEY = `${process.env.REACT_APP_NYTIMES_API_KEY}`;
export const ListingGrid = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=hotdogs&sort=newest&api-key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.response.docs);
        setNews(json.response.docs);
      })
      .catch((err) => console.log("err", err));
  }, []);
  console.log(news);
  return (
    <Wrapper>
      {news === [] ? (
        <div>loading...</div>
      ) : (
        news.map((article) => {
          return (
            <>
              <Article article={article} />
            </>
          );
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
  margin-top: 10rem;
  align-items: center;
`;
