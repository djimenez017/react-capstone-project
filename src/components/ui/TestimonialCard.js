import React from "react";
import styled from "styled-components";

const TestimonialCardStyles = styled.div`
  background: var(--sec-white);
  width: 250px;
  height: 175px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;

  .Image {
    border-radius: 50%;
    width: 60px;
  }

  .imageName {
    display: flex;
  }

  .imageName h4 {
    padding-left: 5px;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  @media (max-width: 600px) {
    height: 200px;
    margin: 10px;
  }

  @media (min-width: 601px) {
  }
`;

const TestimonialCard = ({ name, image_url, rating, text }) => {
  return (
    <TestimonialCardStyles>
      <h3>{rating}</h3>
      <div className="imageName">
        <img src={image_url} alt={name} className="Image" />
        <h4>{name}</h4>
      </div>
      <p>{text}</p>
    </TestimonialCardStyles>
  );
};

export default TestimonialCard;
