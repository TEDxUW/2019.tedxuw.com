import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";

import Button from "~components/Button";
import Icon from "~components/Icon";
import Link from "~components/Link";

import PeopleImg from "~static/img/main.png";

const TAB_INDEX_OFFSET = 5; // account for links in header, and mailing list signup

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 700px;
  height: 87%;
  max-height: 600px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
`;

const MailingListSignup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  

  width: 550px;

  border-radius: ${props => props.theme.app.borderRadius};

  transition: box-shadow 150ms ease;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.15);
  }
`;

const SignupInput = styled.input`
  position: relative;
  width: 75%;
  height: 50px;
  padding: ${props => props.theme.app.padding};

  border: 1px solid #ebebeb;
  border-right: none;
  border-radius: ${props =>
    `${props.theme.app.borderRadius} 0 0 ${props.theme.app.borderRadius}`};

  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] || props.backgroundColor};

  &:focus {
    outline: none;
  }
`;

const SignupButton = styled(Button)`
  position: relative;
  width: 25%;
  height: 50px;

  border-radius: ${props =>
    `0 ${props.theme.app.borderRadius} ${props.theme.app.borderRadius} 0`};
`;

const MainImg = styled.img`
  width: 900px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 125px;

  & a {
    transition: color 150ms ease;
    color: ${props => props.theme.colors.black};
    &:hover, &:focus {
      outline: none;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Main = () => (
  <Container>
    <Heading>{comingSoonData.title}</Heading>
    <MailingListSignup>
      <SignupInput tabIndex="4" />
      <SignupButton
        label="Subscribe"
        icon="arrow-right"
        color="white"
        backgroundColor="primary"
        type="submit"
        tabIndex="5"
      />
    </MailingListSignup>
    <MainImg src={PeopleImg} alt="5 abstract illustrations of people reading books, playing music, and interacting with each other" />
    <Footer>
      {comingSoonData.footerLinks.map((social, i) => (
        <Link href={social.linkTo} alt={social.name} tabIndex={i + TAB_INDEX_OFFSET + 1}><Icon name={social.icon} size="2x" /></Link> 
      ))}
    </Footer>
  </Container>
);

export default Main;
