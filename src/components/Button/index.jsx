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

  &:focus {
    outline: none;
  }

  & > span {
    padding-left: 10px;
  }

  & .icon {
    display: inline-block;

    transition: transform 250ms ease;
    transform: translateX(150px); 
  }

  &:focus .icon, &:hover .icon {
    transform: translateX(0);
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
  tabIndex,
  onClickHandler = () => {},
}) => (
  <StyledButton
    // pass the needed props to the StyledButton defined above
    className={className}
    type={type}
    disabled={disabled}
    color={color}
    backgroundColor={backgroundColor}
    tabIndex={tabIndex}
    onClick={disabled ? null : onClickHandler}
  >
    {label && <span className="label">{label}</span> /* only render label if it's specified */}
    {icon && <span className="icon"><Icon name={icon} /></span>}
  </StyledButton>
);

export default Button;
