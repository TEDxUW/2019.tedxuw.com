import React from "react";
import styled from "styled-components";

import comingSoonData from "~static/data/coming-soon";
import ImgLogo from "~static/img/tedx_logo.svg";
import { mediaQueryFor } from "~utils/tools";

import { AnimLink } from "~components/Link";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;

  height: 13%;

  color: black;

  & img {
    ${mediaQueryFor.tablet`
      max-width: 30%;
    `}
  }

  ${mediaQueryFor.largeMobile`
    & img {
      max-width: 65%;
    }

    & .headerLinksContainer {
      display: none;
    }
  `}
`;

const HeaderLink = styled(AnimLink)`
  margin-left: 35px;

  ${mediaQueryFor.tablet`
    margin-left: 15px;
  `}
`;

const Header = () => (
  <Container>
    <img src={ImgLogo} alt="TEDxUW Logo" />
    <div className="headerLinksContainer">
      {comingSoonData.headerLinks.map((linkData, i) => (
        <HeaderLink
          key={linkData.label}
          href={linkData.link}
          hoverColor="primary"
          tabIndex={i + 1}
        >
          {linkData.label.toUpperCase()}
        </HeaderLink>
      ))}
    </div>
  </Container>
);

export default Header;
