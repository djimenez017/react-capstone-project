import React from "react";
import styled from "styled-components";

const BUTTON_STYLES = styled.button`
  background: var(--sec-black);
  border: none;
  width: 200px;
  color: var(--sec-white);
  padding: 10px;
`;

const Button = ({ children }) => {
  return <BUTTON_STYLES>{children}</BUTTON_STYLES>;
};

export default Button;
