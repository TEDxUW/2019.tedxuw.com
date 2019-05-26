import React from "react";
import styled from "styled-components";

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  position: relative;
`;

const Link = ({ className, href, children, hoverColor = "black", tabIndex }) => (
  <UnstyledLink className={className} href={href} hoverColor={hoverColor} tabIndex={tabIndex}>
    {children}
  </UnstyledLink>
);

export default Link;
