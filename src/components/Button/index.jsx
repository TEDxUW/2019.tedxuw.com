import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${props => props.theme.app.padding};

  cursor: pointer;
  border: none;
  border-radius: ${props => props.theme.app.borderRadius};

  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] || props.backgroundColor};

  // remove annoying blue Chrome outline when focused
  &:focus {
    outline: none;
  }
`;

const Button = ({
  className,
  label,
  icon,
  disabled,
  color = "white",
  backgroundColor = "black",
  type = "button",
  onClickHandler = () => {},
}) => (
  <StyledButton
    className={className}
    type={type}
    disabled={disabled}
    color={color}
    backgroundColor={backgroundColor}
    onClick={disabled ? null : onClickHandler}
  >
    <span>{label}</span>
    <span>{icon}</span>
    {/* TODO: make icon actual font awesome icon */}
  </StyledButton>
);

export default Button;
