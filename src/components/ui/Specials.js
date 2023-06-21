import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
import menuItems from "../data/menu";

const SPECIAL_STYLES = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;

  .specialContainer {
    display: flex;
    justify-content: space-between;
    width: 95%;
    max-width: 1000px;

    padding: 60px 0;
  }

  .cardContainer {
    display: flex;
    flex-direction: row;
  }

  h2 {
    margin: 0;
  }
`;

const Specials = () => {
  const menuSpecial = menuItems.map((item, index) => {
    return (
      <Card
        key={index}
        name={item.name}
        price={item.price}
        description={item.description}
        src={item.url}
      />
    );
  });
  return (
    <SPECIAL_STYLES>
      <div className="specialContainer">
        <h2>Specials</h2>
        <Button>Online Menu</Button>
      </div>
      <div className="cardContainer">{menuSpecial}</div>
    </SPECIAL_STYLES>
  );
};

export default Specials;