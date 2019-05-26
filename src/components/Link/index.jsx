import React from "react";
import styled from "styled-components";

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  position: relative;
`;

const Link = ({ className, href, children, hoverColor = "black" }) => (
  <UnstyledLink className={className} href={href} hoverColor={hoverColor}>
    {children}
  </UnstyledLink>
);

export default Link;
