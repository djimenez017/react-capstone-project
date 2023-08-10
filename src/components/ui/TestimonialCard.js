import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialCardStyles = styled.div`
  background: var(--sec-white);
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;
  border-radius: var(--borderRadius);

  .Image {
    border-radius: 50%;
    width: 60px;
  }

  .imageName {
    display: flex;
  }

  .imageName h4 {
    padding-left: 10px;
  }

  h3 {
    padding-left: 10px;
  }

  .review {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 200px;
    margin: 10px;
  }
`;

const TestimonialCard = ({ name, image_url, rating, text }) => {
  return (
    <TestimonialCardStyles>
      <div className="review">
        <Icon icon={faStar} color={"#ffd642"} size={"lg"} />
        <h3> {rating} </h3>
      </div>
      <div className="imageName">
        <img src={image_url} alt={name} className="Image" />
        <h4>{name}</h4>
      </div>
      <p>{text}</p>
    </TestimonialCardStyles>
  );
};

export default TestimonialCard;
