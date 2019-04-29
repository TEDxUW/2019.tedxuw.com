import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "~components/GlobalStyles";
import GlobalHead from "~components/GlobalHead";
import Header from "~pages/Header";
import Signup from "~pages/Signup";
import theme from "~utils/theme";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 50px;
`;

const Background = styled.div``;

export default () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <GlobalHead />
      <PageContainer>
        <Header />
        <Signup />
        <Background>heres the background and imgs</Background>
      </PageContainer>
    </>
  </ThemeProvider>
);
