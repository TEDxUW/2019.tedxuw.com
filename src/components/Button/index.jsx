import React from "react";
import styled from "styled-components";
import Icon from "~components/Icon";

const StyledButton = styled.button`
  box-sizing: border-box;
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

  & span {
    padding-right: 10px;
  }
`;

const Button = ({
  className,
  label, // text on button
  icon,
  disabled,
  color = "white",
  backgroundColor = "black",
  type = "button",
  onClickHandler = () => {},
}) => (
  <StyledButton
    // pass the needed props to the StyledButton defined above
    className={className}
    type={type}
    disabled={disabled}
    color={color}
    backgroundColor={backgroundColor}
    onClick={disabled ? null : onClickHandler}
  >
    {label && <span>{label}</span> /* only render label if it's specified */}
    {icon && <Icon name={icon} />}
  </StyledButton>
);

export default Button;
