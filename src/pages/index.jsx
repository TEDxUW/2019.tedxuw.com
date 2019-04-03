import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";

const PageContainer = styled.div``;

const Header = styled.div``;

const Signup = styled.div``;

const Background = styled.div``;

export default () => (
  <PageContainer>
    <Header>heres the title</Header>
    <Signup>{comingSoonData.title}</Signup>
    <Background>heres the background and imgs</Background>
  </PageContainer>
);
