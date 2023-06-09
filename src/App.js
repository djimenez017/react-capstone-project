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

  ${"" /* font specs */}
  --lineHeight: 1.5;
  --regular: 53px,
  --mediumFont: 14px;
  --cardTitle: 24px;
  --highlightText: 21px;

${"" /* colors */}
  --primary-yellow: #F4CE14;
  --primary-green: #495E57;
  --sec-orange: #EE9972;
  --sec-beige: #FBDABB;
  --sec-white: #EDEFEE;
  --sec-black: #333333;

  --borderRadius: 16px;
}
  body {
    margin: 0;
    padding: 0;
    font-family: var(--regularFont);
    font-zize: 53px;
  }
`;

const LAYOUT_STYLES = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100vh;

  main {
    padding: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LAYOUT_STYLES>
        <Main>
          <p>Hello there</p>
        </Main>
      </LAYOUT_STYLES>
      <Footer />
    </>
  );
}
// testing comment for upload
export default App;
