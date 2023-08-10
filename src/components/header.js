import React, { useState } from "react";
import styled from "styled-components";
import littlelemonlogo from "./assets/Logo.svg";
import Icon from "./ui/icon";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Modal from "./ui/drawerMenu";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./ui/Homepage";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";

const HEADER_STYLES = styled.header`
  nav {
    display: flex;
    flex-direction: row;
    width: 1010px;
    height: 80px;
    margin: 0 auto;
  }

  ul {
    display: flex;
    text-decoration: none;
    list-style-type: none;
  }

  li a {
    text-decoration: none;
    color: var(--black);
    font-weight: bold;
    padding: 20px;
  }

  .mobileNav {
    display: none;
  }

  .mobileContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 200px;
  }

  @media (max-width: 1137px) {
    nav {
      flex-direction: column;
      height: 60px;
      width: 90%;
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
      height: 100%;
    }

    .logo {
      width: 150px;
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
          <img src={littlelemonlogo} alt="Little Lemon Logo" className="logo" />
          <ul className="mobileHide">
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
          <div className="mobileNav">
            <Icon icon={faBasketShopping} color={"#495E57"} padding="0 7px" />
            <Icon
              icon={faBars}
              color={"#495E57"}
              onClick={toggleModal}
              padding="0 7px"
            />
            {isModalOpen && <Modal closeModal={toggleModal} />}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HEADER_STYLES>
  );
};

export default Header;
