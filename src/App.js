import React from "react";
import TeatreText from "./components/TeatreText.js";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: palevioletred;
  font-size: 4rem;
  padding:1rem;
  margin: 2rem;
`;

const StyleDiv = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default () => {
  return (
    <StyleDiv>
      <div>
        <Title>Teatre Text</Title>
        <TeatreText />
      </div>
    </StyleDiv>
  );
};
