import React from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";

const TestimonialStyles = styled.div`
  background: var(--primary-green);

  .testimonialRow {
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .row {
    display: flex;
  }
`;

const restaurant_reviews = [
  {
    image_url: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
    rating: 4.5,
    name: "Michael Scott",
    review_text: "The food was absolutely delicious!",
  },
  {
    image_url: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    rating: 3.8,
    name: "Jim Halpert",
    review_text: "Decent food but nothing extraordinary. ",
  },
  {
    image_url: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
    rating: 5.0,
    name: "Dwight Schrutte",
    review_text: "One of the best dining experiences I've ever had! ",
  },
  {
    image_url: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    rating: 4.2,
    name: "Ryan the temp",
    review_text: "This place has a great atmosphere and friendly staff. ",
  },
];

const Testimonials = () => {
  const reviewCards = restaurant_reviews.map((review, index) => {
    return (
      <TestimonialCard
        image_url={review.image_url}
        rating={review.rating}
        name={review.name}
        text={review.review_text}
        key={index}
      />
    );
  });

  return (
    <TestimonialStyles>
      <div className="testimonialRow">
        <h2>Testimonials</h2>
        <div className="row">{reviewCards}</div>
      </div>
    </TestimonialStyles>
  );
};

export default Testimonials;
