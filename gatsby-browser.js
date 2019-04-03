import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "~components/GlobalStyles";
import GlobalHead from "~components/GlobalHead";
import theme from "~utils/theme";

/* eslint-disable */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <GlobalHead />
      {element}
    </>
  </ThemeProvider>
);
