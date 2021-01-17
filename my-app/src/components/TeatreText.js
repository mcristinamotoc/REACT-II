import React from "react";
import Teatre from "../data/teatre.json";
import styled from "styled-components";

const P = styled.h2`
  font-size: 1em;
  color: palevioletred;
`;

const StyleDiv = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default () => {
    return (
      <StyleDiv>

        {Teatre.map((item, index) => {
          return (
            <div>
              <P>{item}</P>
            </div>
          );
        })}
        
      </StyleDiv>
    );
  };