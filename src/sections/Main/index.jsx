import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";

import Button from "~components/Button";
import Icon from "~components/Icon";


import PeopleImg from "~static/img/main.png";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 700px;
  margin: 50px auto;
`;

const Heading = styled.h1`
  text-align: center;
`;

const MailingListSignup = styled.div``;

const SignupInput = styled.input`
  position: relative;
  right: -3px;
  height: 50px;
  padding: ${props => props.theme.app.padding};

  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: ${props =>
    `${props.theme.app.borderRadius} 0 0 ${props.theme.app.borderRadius}`};

  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] || props.backgroundColor};

  // remove annoying blue Chrome outline when focused
  &:focus {
    outline: none;
  }
`;

const SignupButton = styled(Button)`
  position: relative;
  left: -3px;
  height: 50px;

  border-radius: ${props =>
    `0 ${props.theme.app.borderRadius} ${props.theme.app.borderRadius} 0`};
`;

const MainImg = styled.img`
  width: 700px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100px;

  color: ${props => props.theme.colors.primary};
`;

const Main = () => (
  <Container>
    <Heading>{comingSoonData.title}</Heading>
    <MailingListSignup>
      <SignupInput />
      <SignupButton
        label="Subscribe"
        icon="arrow-right"
        color="white"
        backgroundColor="primary"
        type="submit"
      />
    </MailingListSignup>
    <MainImg src={PeopleImg} alt="5 abstract illustrations of people reading books, playing music, and interacting with each other" />
    <Footer>
      {[["fab", "facebook-square"], ["fab", "instagram"], ["fab", "linkedin"]].map(social => (
        <Icon name={social} size="2x" />
      ))}
    </Footer>
  </Container>
);

export default Main;
