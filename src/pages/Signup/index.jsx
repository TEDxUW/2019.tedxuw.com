import React from "react";
import styled from "styled-components";
import comingSoonData from "~static/data/coming-soon";
import Button from "~components/Button";

const Container = styled.div``;

const Signup = () => (
  <Container>
    {comingSoonData.title}
    <Button
      label="Subscribe"
      icon="arrow-right"
      color="white"
      backgroundColor="primary"
      type="submit"
    />
  </Container>
);

export default Signup;
