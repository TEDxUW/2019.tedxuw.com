import React from "react";
import styled from "styled-components";

import comingSoonData from "~static/data/coming-soon";
import { mediaQueryFor } from "~utils/tools";

import Icon from "~components/Icon";
import Link, { AnimLink } from "~components/Link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    margin-top: 20px;
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
        padding-top: 10px;
      }
    }
  `}
`;

const Footer = () => (
  <Container>
    <div className="socialContainer">
      {comingSoonData.footerLinks.map(social => (
        <Link
          key={social.name}
          href={social.linkTo}
          alt={social.name}
          tabIndex={0}
        >
          <Icon name={social.icon} size="2x" />
        </Link>
      ))}
    </div>
    <div className="linksContainer">
      {comingSoonData.headerLinks.map(linkData => (
        <span key={linkData.label}>
          <AnimLink
            href={linkData.link}
            hoverColor="primary"
            tabIndex={0}
          >
            {linkData.label.toUpperCase()}
          </AnimLink>
        </span>
      ))}
    </div>
  </Container>
);

export default Footer;
