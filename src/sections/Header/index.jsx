import React from "react";
import styled from "styled-components";

import Link from "~components/Link";

import comingSoonData from "~static/data/coming-soon";
import ImgLogo from "~static/img/tedx_logo.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  color: black;
`;

const HeaderLink = styled(Link)`
  margin-left: 35px;

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  &:before {
    content: "";
    position: absolute;

    width: 100%;
    height: 5px;
    bottom: -5px;
    left: 0;

    background-color: ${props =>
      props.theme.colors[props.hoverColor] || props.hoverColor};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

const Header = () => (
  <Container>
    <img src={ImgLogo} alt="TEDxUW Logo" />
    <div className="headerLinksContainer">
      {comingSoonData.headerLinks.map(linkData => (
        <HeaderLink
          key={linkData.label}
          href={linkData.link}
          hoverColor="primary"
        >
          {linkData.label.toUpperCase()}
        </HeaderLink>
      ))}
    </div>
  </Container>
);

export default Header;
