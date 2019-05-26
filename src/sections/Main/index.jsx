import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";

import Icon from "~components/Icon";
import Link from "~components/Link";
import MailingListSignup from "./MailingListSignup";

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
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Main = () => (
  <Container>
    <Heading>{comingSoonData.title}</Heading>
    <MailingListSignup />
    <MainImg
      src={PeopleImg}
      alt="5 abstract illustrations of people reading books, playing music, and interacting with each other"
    />
    <Footer>
      {comingSoonData.footerLinks.map((social, i) => (
        <Link
          href={social.linkTo}
          alt={social.name}
          tabIndex={i + TAB_INDEX_OFFSET + 1}
        >
          <Icon name={social.icon} size="2x" />
        </Link>
      ))}
    </Footer>
  </Container>
);

export default Main;
