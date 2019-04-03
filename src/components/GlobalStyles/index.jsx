import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    color: ${props => props.theme.colors.primary};
  }
`;

export default GlobalStyle;
