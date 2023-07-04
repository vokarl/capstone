import { createGlobalStyle } from "styled-components";
import "typeface-roboto";
import "typeface-montserrat";

const GlobalStyles = createGlobalStyle`
 

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  H1{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    background-color: black;
    width: 100vw;
    height: 100vh;
    
  }

`;
export default GlobalStyles;
