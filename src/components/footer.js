import React from "react";
import styled from "styled-components";
import LittleLemonLogo from "./assets/LittleLemonLogonbg.png";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./ui/Homepage";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";

const FOOTER_STYLES = styled.footer`
  width: 100%;
  background: var(--primary-green);
  color: var(--sec-white);
  position: static;
  bottom: 0;

  .column-container {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
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

  img {
    width: 100px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 10px 0;
  }

  li {
    font-weight: bold;
  }

  @media (max-width: 600px) {
    .column-container {
      flex-direction: column;
      width: 90%;
    }
  }

  @media (min-width: 601px) {
  }
`;

export const footer = () => {
  return (
    <FOOTER_STYLES>
      <div className="column-container">
        <div className="column">
          <img src={LittleLemonLogo} alt="Litte Lemon" />
        </div>
        <div className="column">
          Doormat Navigation{" "}
          <ul>
            {" "}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/Order-online ">Order Online </Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          Contact{" "}
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="column">
          Social Media{" "}
          <ul>
            {" "}
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Threads</li>
          </ul>
        </div>
      </div>
    </FOOTER_STYLES>
  );
};

export default footer;
