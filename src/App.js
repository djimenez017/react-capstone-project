import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Homepage from "./components/sections/Homepage.js";

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
 
  }
`;

const LAYOUT_STYLES = styled.div`
  main {
  }

  @media (max-width: 600px) {
    main {
    }
  }

  @media (min-width: 601px) {
    main {
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LAYOUT_STYLES>
        <Main>
          <Homepage />
        </Main>
      </LAYOUT_STYLES>
      <Footer />
    </>
  );
}
// testing comment for upload
export default App;
