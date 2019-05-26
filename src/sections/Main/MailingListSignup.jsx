import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Button from "~components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 550px;

  border-radius: ${props => props.theme.app.borderRadius};

  transition: box-shadow 150ms ease;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  }
`;

const SignupInput = styled.input`
  position: relative;
  width: 75%;
  height: 50px;
  padding: ${props => props.theme.app.padding};

  border: 1px solid #ebebeb;
  border-right: none;
  border-radius: ${props =>
    `${props.theme.app.borderRadius} 0 0 ${props.theme.app.borderRadius}`};

  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] || props.backgroundColor};

  &:focus {
    outline: none;
  }
`;

const SignupButton = styled(Button)`
  position: relative;
  width: 25%;
  height: 50px;

  border-radius: ${props =>
    `0 ${props.theme.app.borderRadius} ${props.theme.app.borderRadius} 0`};
`;

const MailingListSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("SUBSCRIBE");

  const handleInputChange = e => setEmail(e.target.value);
  const submitSignup = useCallback(() => {
    console.log("submitting email", email);
    setStatus("SUBMITTING");
    console.log("successfully submitted email", email);
    setStatus("SUBMITTED!");
    setEmail("");
  }, [email, setEmail, setStatus]);

  return (
    <Container>
      <SignupInput
        tabIndex="4"
        type="email"
        value={email}
        onChange={handleInputChange}
      />
      <SignupButton
        label={status}
        icon={status === "SUBSCRIBE" && "arrow-right"}
        color="white"
        backgroundColor="primary"
        type="submit"
        onClick={submitSignup}
        tabIndex="5"
      />
    </Container>
  );
};

export default MailingListSignup;
