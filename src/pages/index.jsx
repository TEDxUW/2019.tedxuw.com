import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "~components/GlobalStyles";
import GlobalHead from "~components/GlobalHead";

import Header from "~sections/Header";
import Main from "~sections/Main";
import Background from "~sections/Background";

import theme from "~utils/theme";
import { mediaQueryFor } from "~utils/tools";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
  height: 100vh;
  padding: 50px;

  ${mediaQueryFor.largeMobile`
    padding: 30px;
  `}
`;

export default () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <GlobalHead />
      <PageContainer>
        <Header />
        <Main />
      </PageContainer>
      <Background />
    </>
  </ThemeProvider>
);
