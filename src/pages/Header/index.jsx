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

const Signup = () => (
  <Container>
    <img src={ImgLogo} alt="TEDxUW Logo" />
    <div className="headerLinksContainer">
      {comingSoonData.headerLinks.map(linkData => (
        <Link href={linkData.link} hoverColor="primary">
          {linkData.label.toUpperCase()}
        </Link>
      ))}
    </div>
  </Container>
);

export default Signup;
