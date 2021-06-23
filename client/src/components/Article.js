import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Article = ({ article }) => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src={article.urlToImage} />
        </ImageWrapper>
        <Title>{article.title}</Title>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  text-decoration: none;
`;

const Image = styled.img`
  min-height: 20rem;
  min-width: 20rem;
  border: 2px solid var(--mustard);
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
  padding-top: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: var(--header-font);
  font-weight: bold;
  color: var(--meat);
  max-width: 15rem;
  /* &:hover {
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  } */
`;
export default Article;
