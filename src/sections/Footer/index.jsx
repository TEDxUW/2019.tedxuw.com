import React from "react";
import styled from "styled-components";

import comingSoonData from "~static/data/coming-soon";
import { mediaQueryFor } from "~utils/tools";

import Icon from "~components/Icon";
import Link, { AnimLink } from "~components/Link";

const TAB_INDEX_OFFSET = 5; // account for links in header, and mailing list signup

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
  </Container>
);

export default Footer;
