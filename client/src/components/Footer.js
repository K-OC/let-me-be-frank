import React, { useState, useEffect } from "react";
import styled from "styled-components";
export const Footer = () => {
    return (
        <>
        <Wrapper>
           <StyledLink>About</StyledLink>
           <StyledLink href="https://github.com/K-OC" target="_blank">Github</StyledLink>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
align-items: center;
font-size: 20px;
color: var(--meat)
`
const StyledLink = styled.a`
text-decoration: none;
&:visited{
    color: var(--bun)
}
`

