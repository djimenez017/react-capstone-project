import React, { useState } from "react";
import data from "../data/data";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Icon from "../ui/icon";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import About from "../pages/About";
import Homepage from "../ui/Homepage";
import Menu from "../pages/Menu";
import BookingPage from "../pages/BookingPage";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";

const SLIDER_STYLES = styled.div`
  .drawer-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .drawer-menu {
    width: 250px;
    height: 100%;
    background-color: var(--primary-green);
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(0px);
    transition: transform 0.8s ease-in-out;
    z-index: 10;
    color: var(--sec-white);
    padding: 50px 0;
    display: flex;
    justify-content: flex-end;
  }

  .drawer-menu.open {
    transform: translateX(250px);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 20px;
    text-align: right;
  }

  li a {
    padding: 15px 0;
    text-decoration: none;
    color: var(--black);
    font-weight: bold;
  }

  .goright {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
`;

const DrawerMenu = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SLIDER_STYLES>
      <div className={`drawer-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-container">
          <div className="goright">
            <Icon icon={faX} onClick={closeModal} />
          </div>
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
        </div>{" "}
      </div>
    </SLIDER_STYLES>
  );
};

export default DrawerMenu;
