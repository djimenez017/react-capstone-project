import React from "react";
import styled from "styled-components";
import GreekSaladImage from "../assets/greek salad.jpg";
import BruchettaImage from "../assets/bruchetta.svg";
import LemonDessertImage from "../assets/lemon dessert.jpg";
import Icon from "./icon";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const CARD_STYLES = styled.div`
  .singleCard {
    background: red;
    width: 300px;
    height: 430px;
    background: var(--primary-green);
    color: var(--sec-white);
    margin: 10px 0;
    border-radius: var(--borderRadius);
  }

  .cardImg {
    width: 300px;
    height: 200px;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }

  .plateText {
    padding: 0 20px;
  }

  .plateTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    color: var(--primary-yellow);
    font-weight: bold;
  }

  h4 {
    margin: 0;
  }

  .delivery {
    color: var(--primary-yellow);
  }

  @media (max-width: 600px) {
    .singleCard {
      width: 350px;
    }

    .cardImg {
      width: 350px;
      height: 200px;
    }
  }

  @media (min-width: 601px) {
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
      <div className="singleCard">
        <img className="cardImg" src={getImageByURL(src)} alt={name} />
        <div className="plateText">
          <div className="plateTitle">
            <h4>{name}</h4>
            <p className="price">{price}</p>
          </div>
          <div className="plateDescription">
            <p>{description}</p>
          </div>
          <div className="delivery">
            Order a delivery
            <Icon icon={faMotorcycle} size={"sm"} />
          </div>
        </div>
      </div>
    </CARD_STYLES>
  );
};

export default Card;
