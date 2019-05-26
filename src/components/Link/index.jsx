import React from "react";
import styled from "styled-components";

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  position: relative;
`;

const Link = ({
  className,
  href,
  children,
  hoverColor = "black",
  tabIndex,
}) => (
  <UnstyledLink
    className={className}
    href={href}
    hoverColor={hoverColor}
    tabIndex={tabIndex}
  >
    {children}
  </UnstyledLink>
);

export const AnimLink = styled(Link)`
  &:before {
    content: "";
    position: absolute;

    width: 100%;
    height: 4px;
    bottom: -6px;
    left: 0;

    background-color: ${props =>
      props.theme.colors[props.hoverColor] || props.hoverColor};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 150ms ease 0s;
  }

  &:focus,
  &:hover {
    outline: none;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export default Link;
