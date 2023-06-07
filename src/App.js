import "./App.css";
import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla&family=Markazi+Text&display=swap');
:root{
  ${"" /* fonts */}
  --displayFont: 'Markazi Text', serif;
  --regularFont: 'Karla', sans-serif;

  ${"" /* font sizes */}

${"" /* colors */}
  --primary-yellow: #F4CE14;
  --primary-green: #495E57;
  --sec-orange: #EE9972;
  --sec-beige: #FBDABB;
  --sec-white: #EDEFEE;
  --sec-black: #333333;
}
  body {
    margin: 0;
    padding: 0;
    font-family: var(--regularFont);
  }
`;

const LAYOUT_STYLES = styled.div`
  background: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LAYOUT_STYLES>
        <Main>Hello there</Main>
      </LAYOUT_STYLES>
      <Footer />
    </>
  );
}

export default App;
