import React from "react";
import Layout from "../ui/Layout";
import Items from "../data/menu";
import styled from "styled-components";

const Menu_Styles = styled.div`
  height: 100vh;
  .menuCard {
    margin: 20px;
    padding: 10px 20px;
    background: var(--primary-green);
    color: var(--sec-white);
    border-radius: var(--borderRadius);
  }

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  h3 {
    color: var(--primary-yellow);
    font-size: 20px;
  }
`;

const Menu = () => {
  const MenuItems = Items.map((foodItem, index) => {
    return (
      <div className="menuCard">
        <h3>{foodItem.name}</h3>
        <h4>{foodItem.price}</h4>
        <p>{foodItem.description}</p>
      </div>
    );
  });

  return (
    <Menu_Styles>
      {" "}
      <h2>Little Lemon Menu</h2>
      {MenuItems}
    </Menu_Styles>
  );
};

export default Menu;
