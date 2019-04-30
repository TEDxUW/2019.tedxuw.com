import React from "react";
import styled from "styled-components";

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  position: relative;

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

const Link = ({ href, children, hoverColor = "black" }) => (
  <UnstyledLink href={href} hoverColor={hoverColor}>
    {children}
  </UnstyledLink>
);

export default Link;
