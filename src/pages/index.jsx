import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "~components/GlobalStyles";
import GlobalHead from "~components/GlobalHead";
import theme from "~utils/theme";
import comingSoonData from "~static/data/coming-soon";

import Button from "~components/Button";

const PageContainer = styled.div``;

const Header = styled.div``;

const Signup = styled.div``;

const Background = styled.div``;

export default () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <GlobalHead />
      <PageContainer>
        <Header>heres the title</Header>
        <Signup>
          {comingSoonData.title}
          <Button
            label="Subscribe"
            icon="arrow-right"
            color="white"
            backgroundColor="primary"
            type="submit"
          />
        </Signup>
        <Background>heres the background and imgs</Background>
      </PageContainer>
    </>
  </ThemeProvider>
);
