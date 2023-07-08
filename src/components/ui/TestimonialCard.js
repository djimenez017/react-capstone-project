import React from "react";
import styled from "styled-components";

const TestimonialCardStyles = styled.div`
  background: var(--sec-white);
  margin: 20px;
  img {
    width: 70px;
    border-radius: 50%;
  }

  .imageName {
    display: flex;
  }
`;
const TestimonialCard = ({ name, image_url, rating, text }) => {
  console.log(image_url);
  return (
    <TestimonialCardStyles>
      <p>{rating}</p>
      <div className="imageName">
        <img src={image_url} alt={name} />
        <h4>{name}</h4>
      </div>
      <p>{text}</p>
    </TestimonialCardStyles>
  );
};

export default TestimonialCard;
