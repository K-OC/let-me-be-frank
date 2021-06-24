import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import Article from "./Article";
require("dotenv").config();
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
export const ListingGrid = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      ` https://newsapi.org/v2/everything?qinTitle="hot-dog"&qInTitle="hotdogs"&qinTitle="hot-dogs"&qInTitle="sausage"&qInTitle="hotdog"&from=2021-06-01&sortBy=publishedAt&language=en&pageSize=100&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json.articles);
      })
      .catch((err) => console.log("err"));
  }, []);

  console.log(news);
  return (
    <Wrapper>
      {news.map((article) => {
        return (
          <>
            <Article article={article} />
          </>
        );
      })}
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
