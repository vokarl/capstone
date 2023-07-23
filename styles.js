import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
 
  body {
  background: #f2f2f2;
  color: #333;
  font-family:  sans-serif;
  font-size: medium;

}
    a {
  color: #333;
  text-decoration: none;
}
`;
export default GlobalStyles;
