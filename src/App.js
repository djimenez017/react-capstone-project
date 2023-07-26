import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";

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

body{
  box-sizing: border-box;
}
`;

const LAYOUT_STYLES = styled.div``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LAYOUT_STYLES>
        <Main></Main>
      </LAYOUT_STYLES>
      <Footer />
    </>
  );
}
// testing comment for upload
export default App;
