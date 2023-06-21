import React from "react";
import styled from "styled-components";
import GreekSaladImage from "../assets/greek salad.jpg";
import BruchettaImage from "../assets/bruchetta.svg";
import LemonDessertImage from "../assets/lemon dessert.jpg";

const CARD_STYLES = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;

  .cardContainter {
    background: red;
    margin: 10px;
    padding: 10px;
  }

  @media (max-width: 600px) {
  }

  @media (min-width: 601px) {
    flex-direction: column;
  }
`;

const Card = ({ name, price, description, src }) => {
  const getImageByURL = (src) => {
    switch (src) {
      case "../assets/greek salad.jpg":
        return GreekSaladImage;
      case "../assets/bruchetta.svg":
        return BruchettaImage;
      case "../assets/lemon dessert.jpg":
        return LemonDessertImage;
      default:
        return null;
    }
  };

  return (
    <CARD_STYLES>
      <div className="cardContainter">
        <img src={getImageByURL(src)} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </CARD_STYLES>
  );
};

export default Card;
