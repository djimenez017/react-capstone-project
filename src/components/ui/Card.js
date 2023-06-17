import React from "react";
import styled from "styled-components";

const CARD_STYLES = styled.div`
  baackground: red;
`;

const Card = ({ name, price, description, src }) => {
  return (
    <CARD_STYLES>
      <img src={src} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <p>{description}</p>
    </CARD_STYLES>
  );
};

export default Card;
