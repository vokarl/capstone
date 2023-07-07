import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  H1{
    margin: 0;
    font-family:  sans-serif;
    font-weight: 100;
  }

  body {
    margin: 0;
    font-family:  sans-serif;
    font-weight: 300;
    
    width: 100vw;
    height: 100vh;
    background-color: rgb(30,40,40);
    
    
  }

`;
export default GlobalStyles;
