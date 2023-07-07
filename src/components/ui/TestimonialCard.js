import React from "react";

const TestimonialCard = ({ name, image_url, rating, text }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={image_url} alt={name} />
      <p>{rating}</p>
      <p>{text}</p>
    </div>
  );
};

export default TestimonialCard;
