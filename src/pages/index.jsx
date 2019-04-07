import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";

import Button from "~components/Button";

const PageContainer = styled.div``;

const Header = styled.div``;

const Signup = styled.div``;

const Background = styled.div``;

export default () => (
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
);
