import React from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";

const TestimonialStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;

  .row {
    display: flex;
  }
`;

const restaurant_reviews = [
  {
    image_url: "https://randomuser.me/api/portraits/med/men/75.jpg",
    rating: 4.5,
    name: "Michael Scott",
    review_text:
      "The food was absolutely delicious! The ambiance was cozy and the service was excellent. Highly recommend their pasta dishes.",
  },
  {
    image_url: "https://randomuser.me/api/portraits/med/men/53.jpg",
    rating: 3.8,
    name: "Jim Halpert",
    review_text:
      "Decent food but nothing extraordinary. The service was a bit slow, and the portions were smaller than expected. Prices were reasonable though.",
  },
  {
    image_url: "https://randomuser.me/api/portraits/med/men/57.jpg",
    rating: 5.0,
    name: "Dwight Schrutte",
    review_text:
      "One of the best dining experiences I've ever had! The flavors in each dish were incredible, and the presentation was top-notch. Will definitely be returning.",
  },
  {
    image_url: "https://randomuser.me/api/portraits/med/men/75.jpg",
    rating: 4.2,
    name: "Ryan the temp",
    review_text:
      "This place has a great atmosphere and friendly staff. The food was tasty, especially their signature dessert. Would recommend trying it out!",
  },
];

const Testimonials = () => {
  const reviewCards = restaurant_reviews.map((review, index) => {
    return (
      <TestimonialCard
        img={review.image_url}
        rating={review.rating}
        name={review.name}
        text={review.review_text}
        key={index}
      />
    );
  });

  return (
    <TestimonialStyles>
      <h2>Testimonials</h2>
      <div className="row">{reviewCards}</div>
    </TestimonialStyles>
  );
};

export default Testimonials;
