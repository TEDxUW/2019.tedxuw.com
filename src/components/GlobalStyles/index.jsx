import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap');

  html, body {
    font-family: ${props =>
      props.theme.app
        .font}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif;
    box-sizing: border-box;
    margin: 0 !important;
    padding: 0 !important;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
