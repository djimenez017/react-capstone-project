import React from "react";
import Layout from "../ui/Layout";
import Items from "../data/menu";
import styled from "styled-components";

const Menu_Styles = styled.div`
  .menuCard {
    margin: 20px;
    padding: 10px 20px;
    background: var(--primary-green);
    color: var(--sec-white);
    border-radius: var(--borderRadius);
  }

  h3 {
    color: var(--primary-yellow);
    font-size: 20px;
  }

  h2 {
  }
`;

const Menu = () => {
  const MenuItems = Items.map((foodItem, index) => {
    return (
      <div className="menuCard">
        <h3>{foodItem.name}</h3>
        <p>{foodItem.price}</p>
        <p>{foodItem.description}</p>
      </div>
    );
  });

  return (
    <Layout>
      {" "}
      <h2>Little Lemon Menu</h2>
      <Menu_Styles>{MenuItems}</Menu_Styles>
    </Layout>
  );
};

export default Menu;