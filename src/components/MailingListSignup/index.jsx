import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { mediaQueryFor } from "~utils/tools";

import Button from "~components/Button";

const SIGNUP_STATES = {
  READY: "READY",
  INVALID: "INVALID",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
};

const BUTTON_TEXT = {
  [SIGNUP_STATES.READY]: "SUBSCRIBE",
  [SIGNUP_STATES.INVALID]: "SUBSCRIBE",
  [SIGNUP_STATES.SUBMITTING]: "SUBSCRIBING",
  [SIGNUP_STATES.SUBMITTED]: "SUBSCRIBED!",
};

const isValidEmail = email => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 550px;
  margin: 0 auto;

  border-radius: ${props => props.theme.app.borderRadius};

  transition: box-shadow 150ms ease;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  }

  &:after {
    ${({ hasErrorSubtext }) => !hasErrorSubtext && "display: none"};

    position: absolute;
    left: ${props => props.theme.app.padding};
    bottom: 5px;

    content: "Make sure your email is valid.";
    font-size: 0.7em;
    color: ${props => props.theme.colors.primary};
  }

  ${mediaQueryFor.largeMobile`
    width: 100%;
  `}
`;

const SignupInput = styled.input`
  position: relative;
  width: 75%;
  height: 50px;

  transition: padding 250ms;
  padding: ${props => props.theme.app.padding};
  ${({ hasErrorSubtext }) => hasErrorSubtext && `padding-bottom: 25px`};

  border: 1px solid #ebebeb;
  border-right: none;
  border-radius: ${props =>
    `${props.theme.app.borderRadius} 0 0 ${props.theme.app.borderRadius}`};

  font-size: 0.85rem;
  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] || props.backgroundColor};

  &:focus {
    outline: none;
  }

  ${mediaQueryFor.tablet`
    width: 70%;
  `}

  ${mediaQueryFor.largeMobile`
    width: 60%;
  `}
`;

const SignupButton = styled(Button)`
  position: relative;
  width: 25%;
  height: 50px;

  font-size: 0.85rem;
  border-radius: ${props =>
    `0 ${props.theme.app.borderRadius} ${props.theme.app.borderRadius} 0`};

  ${mediaQueryFor.tablet`
    width: 30%;
  `}

  ${mediaQueryFor.largeMobile`
    width: 40%;
  `}
`;

const MailingListSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(SIGNUP_STATES.READY);

  const submitSignup = useCallback(() => {
    if (isValidEmail(email)) {
      setStatus(SIGNUP_STATES.SUBMITTING);
    } else {
      setStatus(SIGNUP_STATES.INVALID);
    }
  }, [email, setStatus]);

  const handleInputChange = useCallback(
    e => {
      setEmail(e.target.value);

      // clear invalid msg if all input is deleted (essentially typing new email)
      if (status === SIGNUP_STATES.INVALID) {
        setStatus(SIGNUP_STATES.READY);
      }
    },
    [status]
  );

  return (
    <ContainerForm
      name="signups"
      method="post"
      netlify
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/?signup=success"
      hasErrorSubtext={status === SIGNUP_STATES.INVALID}
      onSubmit={submitSignup}
    >
      <SignupInput
        name="email"
        type="email"
        required
        minLength={5}
        value={email}
        tabIndex="4"
        hasErrorSubtext={status === SIGNUP_STATES.INVALID}
        onChange={handleInputChange}
      />
      <SignupButton
        label={BUTTON_TEXT[status]}
        icon={
          status === SIGNUP_STATES.READY || status === SIGNUP_STATES.INVALID
            ? "arrow-right"
            : undefined
        }
        color="white"
        backgroundColor="primary"
        tabIndex="5"
        type="submit"
        disabled={status === SIGNUP_STATES.INVALID}
        onClick={submitSignup}
      />
      <p hidden>
        Don’t fill this out if you&apos;re human: <input name="bot-field" />
      </p>
      <input type="hidden" name="form-name" value="signups" />
    </ContainerForm>
  );
};

export default MailingListSignup;
