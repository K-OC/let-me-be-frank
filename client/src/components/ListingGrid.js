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
      ` https://newsapi.org/v2/everything?q=hotdogs&from=2021-06-01&sortBy=publishedAt&apiKey=${API_KEY}`
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
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: minmax(200px, auto) repeat(5, 400px);
  justify-content: center;
  justify-content: space-around;
  margin-top: 10rem;
  align-items: center;
  align-content: center;
`;
