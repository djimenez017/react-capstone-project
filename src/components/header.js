import React, { useState } from "react";
import styled from "styled-components";
import littlelemonlogo from "./assets/Logo.svg";
import navigationItems from "./data/data";
import Icon from "./ui/icon";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Modal from "./ui/drawerMenu";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./sections/Homepage";
import Menu from "./pages/About";

const HEADER_STYLES = styled.header`
  nav {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    max-width: 1000px;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    -webkit-box-shadow: 0px 1px 17px 55px rgba(NaN, 73, 94, 10);
    -moz-box-shadow: 0px 1px 17px 55px rgba(NaN, 73, 94, 10);
    box-shadow: 0px 1px 17px 55px rgba(NaN, 73, 94, 10);
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

  img {
    width: 200px;
  }

  .mobileNav {
    display: none;
  }

  .mobileContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  // MOBILE VUE
  @media (max-width: 1137px) {
    nav {
      flex-direction: column;
      width: 90%;
      padding: 20px;
    }

    .mobileHide {
      display: none;
    }

    .mobileNav {
      display: block;
    }

    ul {
      flex-direction: column;
    }

    .mobileContainer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    img {
      width: 150px;
    }
  }

  // DESKTOP VUE
  @media (min-width: 601px) {
    nav {
    }
  }
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HEADER_STYLES>
      <nav>
        <div className="mobileContainer">
          <img src={littlelemonlogo} alt="Little Lemon Logo" />
          <ul className="mobileHide">
            {/* {navigationItems.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              );
            })} */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
          </ul>
          <div className="mobileNav">
            <Icon icon={faBasketShopping} color={"#495E57"} />
            <Icon icon={faBars} color={"#495E57"} onClick={toggleModal} />
            {isModalOpen && <Modal closeModal={toggleModal} />}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </HEADER_STYLES>
  );
};

export default Header;
