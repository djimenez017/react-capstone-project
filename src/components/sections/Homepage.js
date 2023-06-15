import React from "react";
import styled from "styled-components";
import LiruLemon from "../assets/Mario and Adrian A.jpg";
import Button from "../ui/Button";

const HOMEPAGE_STYLES = styled.div`
  height: 100vh;
  padding: 0;

  .heroBackground {
    background: var(--primary-green);
  }

  .heroContent {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
  }

  .HeroText {
    color: var(--sec-white);
    display: flex;
    flex-direction: column;
    align-content: center;
    font-family: (--displayFont);
  }

  .HeroText h1 {
    color: var(--sec-white);
    font-family: (--displayFont);
    margin-bottom: 0;
  }

  .HeroText h5 {
    margin-top: 0;
  }

  img {
    width: 375px;
  }
`;

const Homepage = () => {
  return (
    <HOMEPAGE_STYLES>
      <div className="heroBackground">
        <div className="heroContent">
          <div className="HeroText">
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              unde soluta inventore ipsam perspiciatis rerum.
            </p>
            <Button>Reserve a Table</Button>
          </div>

          <img src={LiruLemon} alt="Little Lemon" />
        </div>
      </div>
    </HOMEPAGE_STYLES>
  );
};

export default Homepage;
