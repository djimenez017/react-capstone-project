import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SPECIAL_STYLES = styled.div`
  display: flex;

  .specialContainer {
    display: flex;
    justify-content: space-between;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 0;
  }

  h2 {
    margin: 0;
  }
`;

const Specials = () => {
  return (
    <SPECIAL_STYLES>
      <div className="specialContainer">
        <h2>Specials</h2>
        <Button>Online Menu</Button>
      </div>
    </SPECIAL_STYLES>
  );
};

export default Specials;
