import React from "react";
import styled from "styled-components";
import navigationLinks from "../components/data/data";

const FOOTER_STYLES = styled.footer`
  position: static;
  bottom: 0;
  width: 100%;
  background: var(--primary-green);

  .column-container {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: 0 auto;
  }

  .column {
    padding: 15px;
  }

  .column a {
    text-decoration: none;
    color: var(--black);
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
  }

  @media (max-width: 600px) {
    .column-container {
      flex-direction: column;
    }
  }

  @media (min-width: 601px) {
  }
`;

const doormatNavLinks = navigationLinks.map((link, index) => {
  return (
    <li key={index}>
      <a href={link.href}>{link.name}</a>
    </li>
  );
});

export const footer = () => {
  return (
    <FOOTER_STYLES>
      <div className="column-container">
        <div className="column">Logo</div>
        <div className="column">
          Doormat Navigation <ul> {doormatNavLinks}</ul>
        </div>
        <div className="column">
          Contact <ul> {doormatNavLinks}</ul>
        </div>
        <div className="column">
          Social Media <ul> {doormatNavLinks}</ul>
        </div>
      </div>
    </FOOTER_STYLES>
  );
};

export default footer;
