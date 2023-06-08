import React from "react";
import styled from "styled-components";
import littlelemonlogo from "./assets/Logo.svg";
import navigationItems from "./data/data";
const HEADER_STYLES = styled.header`
  margin: 10px;

  nav {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li a {
    padding: 15px;
    text-decoration: none;
    color: var(--black);
    font-weight: bold;
  }
`;

const header = () => {
  return (
    <HEADER_STYLES>
      <nav>
        <img src={littlelemonlogo} alt="Little Lemon Logo" />
        <ul>
          {navigationItems.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </HEADER_STYLES>
  );
};

export default header;
