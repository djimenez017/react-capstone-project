import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComingSoonStyles = styled.div`
  text-align: center;
  h1 {
    padding: 20px;
    background: var(--primary-yellow);
    color: var(--sec-white);
    margin: 0 auto;
    width: 60%;
    text-align: center;
  }

  a {
    color: var(--primary-yellow);
  }
`;

const comingsoon = (props) => {
  return (
    <ComingSoonStyles>
      <h1>{props.word}</h1>
      <h2>{props.text}</h2>
      <Link to="/">
        <a>Go Home</a>
      </Link>
    </ComingSoonStyles>
  );
};

export default comingsoon;
