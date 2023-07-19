import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
 

  body {
    margin: 0;
    font-family:  sans-serif;
    font-weight: 300;
    width: 100vw;
    height: 100vh;
    color: white;
    background-color: rgb(30,40,40);
    }
    a {
  color: #333;
  text-decoration: none;
}
`;
export default GlobalStyles;
