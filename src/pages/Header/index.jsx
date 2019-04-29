import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";
import ImgLogo from "~static/img/tedx_logo.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Signup = () => (
  <Container>
    <img src={ImgLogo} alt="TEDxUW Logo" />
    <div className="headerLinksContainer">
      {comingSoonData.headerLinks.map(linkData => (
        <a href={linkData.link}>{linkData.label}</a>
      ))}
    </div>
  </Container>
);

export default Signup;
