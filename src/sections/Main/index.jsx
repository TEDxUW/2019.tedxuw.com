import React from "react";
import styled from "styled-components";

import comingSoonData from "~static/data/coming-soon";
import PeopleImg from "~static/img/main.png";
import { mediaQueryFor } from "~utils/tools";

import Icon from "~components/Icon";
import Link, { AnimLink } from "~components/Link";
import MailingListSignup from "./MailingListSignup";

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
  margin: auto;

  ${mediaQueryFor.tablet`
    width: 600px;
  `}

  ${mediaQueryFor.largeMobile`
    width: 100%;
  `}
`;

const Heading = styled.h1`
  & span {
    color: ${props => props.theme.colors.primary};
  }

  text-align: center;

  ${mediaQueryFor.largeMobile`
    text-align: left;
  `}
`;

const MainImg = styled.img`
  width: 900px;

  ${mediaQueryFor.tablet`
    width: 700px;
  `}

  ${mediaQueryFor.largeMobile`
    width: 120%;
  `}
`;

const Footer = styled.div`
  & .socialContainer {
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
  }

  & .linksContainer {
    display: none;
  }

  ${mediaQueryFor.largeMobile`
    display: flex;
    justify-content: space-between;

    width: 100%;

    & .socialContainer {
      align-items: flex-end;
      width: 110px;
    }

    & .linksContainer {
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-end;


      & a {
        position: relative;
        float: right;

        text-align: right;
        padding-top: 5px;
      }
    }
  `}
`;

const Main = () => (
  <Container>
    <Heading>
      Join us on <span>October 5, 2019</span> at <span>Hagey Hall</span> for the
      University of Waterloo’s 7th TEDx conference!
    </Heading>
    <MailingListSignup />
    <MainImg
      src={PeopleImg}
      alt="5 abstract illustrations of people reading books, playing music, and interacting with each other"
    />
    <Footer>
      <div className="socialContainer">
        {comingSoonData.footerLinks.map((social, i) => (
          <Link
            key={social.name}
            href={social.linkTo}
            alt={social.name}
            tabIndex={i + TAB_INDEX_OFFSET + 1}
          >
            <Icon name={social.icon} size="2x" />
          </Link>
        ))}
      </div>
      <div className="linksContainer">
        {comingSoonData.headerLinks.map((linkData, i) => (
          <span>
            <AnimLink
              key={linkData.label}
              href={linkData.link}
              hoverColor="primary"
              tabIndex={i + 1}
            >
              {linkData.label.toUpperCase()}
            </AnimLink>
          </span>
        ))}
      </div>
    </Footer>
  </Container>
);

export default Main;
