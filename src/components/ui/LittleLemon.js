import React from "react";
import styled from "styled-components";
import Potatoes from "../assets/restauranfood.jpg";

const AboutStyles = styled.div`
  display: flex;
  width: 95%;
  max-width: 1000px;
  margin: 60px auto;
  justify-content: space-beween;

  .text {
    padding-right: 50px;
  }

  img {
    width: 300px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;

    img {
      margin: 0 auto;
    }
  }
`;

const LittleLemon = () => {
  return (
    <AboutStyles>
      <div className="text">
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p>
          Nestled in a quaint corner, Little Lemon is a delightful small
          restaurant that enchants diners with its warm and intimate atmosphere.
          Step inside and be greeted by tasteful decor, combining rustic
          elements with contemporary touches, creating an inviting space that
          invites you to unwind and savor the experience. Little Lemon takes
          pride in its culinary prowess, offering a diverse menu of delectable
          dishes inspired by both local and international flavors. From the
          moment your order is taken to the moment your plate is elegantly
          presented, each dish is meticulously crafted with care and attention
          to detail. The talented chefs at Little Lemon embrace seasonal
          ingredients, ensuring that every bite bursts with freshness and
          flavor. Whether you're seeking a cozy dinner for two or a memorable
          gathering with loved ones, Little Lemon promises an unforgettable
          dining experience that leaves a lasting impression.
        </p>
      </div>
      <img src={Potatoes} alt="Little Lemon" />
    </AboutStyles>
  );
};

export default LittleLemon;
