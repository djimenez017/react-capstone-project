import React from "react";
import styled from "styled-components";

const LayoutStyles = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 80px auto;
`;

const Layout = (props) => {
  return <LayoutStyles>{props.children}</LayoutStyles>;
};

export default Layout;

//   display: flex;
//   flex-direction: column;
