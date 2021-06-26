import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Article = ({ article }) => {
  return (
    <>
      <Wrapper
        href={article.url}
        target="_blank"
        onClick={() => {
          console.log(article.url);
        }}
      >
        <ImageWrapper>
          <Image src={article.urlToImage} />
        </ImageWrapper>
        <TitleWrapper>
          <Title>{article.title}</Title>
        </TitleWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  text-decoration: none;
  transition: transform 0.2s ease;
  width: fit-content;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 5px var(--relish);
    border: 5px solid var(--bun);
  }
`;

const Image = styled.img`
  min-height: 20rem;
  min-width: 20rem;
  border: 2px solid var(--mustard);
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  max-width: fit-content;
  max-height: 5rem;
  min-height: 5rem;
`;

const ImageWrapper = styled.div`
  max-height: 15rem;
  max-width: 15rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--mustard);
`;

const Title = styled.p`
  font-family: var(--header-font);
  font-weight: bold;
  color: var(--meat);
  max-width: auto;
`;
export default Article;
