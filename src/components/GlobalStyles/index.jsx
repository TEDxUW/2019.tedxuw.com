import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0 !important;
    padding: 0 !important;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
