import React from "react";
import styled from "styled-components";
import Icon from "~components/Icon";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  padding: 0;

  cursor: pointer;
  border: none;
  border-radius: ${props => props.theme.app.borderRadius};

  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] || props.backgroundColor};

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & .label {
    transition: transform 250ms;
    transform: ${({ hasIcon }) => (!hasIcon ? "none" : "translateX(5px)")};
  }

  & .icon {
    display: inline-block;
    margin-left: 5px;

    transition: transform 250ms;
    transform: translateX(150px);
  }

  &:focus,
  &:hover {
    outline: none;

    & .label {
      transform: translateX(0);
    }
  }

  &:focus .icon,
  &:hover .icon {
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
  onClick = () => {},
}) => (
  <StyledButton
    // pass the needed props to the StyledButton defined above
    className={className}
    type={type}
    disabled={disabled}
    hasIcon={icon}
    color={color}
    backgroundColor={backgroundColor}
    tabIndex={tabIndex}
    onClick={disabled ? null : onClick}
  >
    <div>
      {label && (
        <span className="label">{label}</span>
      ) /* only render label if it's specified */}
      {icon && (
        <span className="icon">
          <Icon name={icon} />
        </span>
      )}
    </div>
  </StyledButton>
);

export default Button;
