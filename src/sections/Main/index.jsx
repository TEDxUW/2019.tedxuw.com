import React from "react";
import styled from "styled-components";

import PeopleImg from "~static/img/main.png";
import { mediaQueryFor } from "~utils/tools";
import withLocation from "~utils/withLocation";

import MailingListSignup from "~components/MailingListSignup";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;
  width: 700px;
  height: 87%;
  max-height: 600px;
  margin: auto;

  ${mediaQueryFor.tablet`
    width: 600px;
  `}

  ${mediaQueryFor.largeMobile`
    width: 100%;
  `}
`;

const MainLogic = styled.div`
  margin-bottom: 40px;
`;

const Heading = styled.h1`
  text-align: center;

  & span.color--red {
    color: ${props => props.theme.colors.primary};
  }

  ${mediaQueryFor.tablet`
    font-size: 1.8em;
  `}

  ${mediaQueryFor.largeMobile`
    font-size: 0.9em;
  `}
`;

const MainImg = styled.img`
  width: 900px;

  ${mediaQueryFor.tablet`
    width: 700px;
  `}

  ${mediaQueryFor.largeMobile`
    width: 180%;
  `}
`;

const Main = ({ search: { signup } }) => (
  <Container>
    <MainLogic>
      <Heading>
        {signup === "success" ? (
          <>
            <span className="color--red">Thank you</span> for signing up! Keep
            an eye out for more news from the{" "}
            <span className="color--red">TEDx</span>UW team 😁
          </>
        ) : (
          <>
            Join us on <span className="color--red">October 5, 2019</span> at{" "}
            <span className="color--red">Hagey Hall</span> for the University of
            Waterloo’s 7th TEDx conference!
          </>
        )}
      </Heading>
      <MailingListSignup />
    </MainLogic>
    <MainImg
      src={PeopleImg}
      alt="5 abstract illustrations of people reading books, playing music, and interacting with each other"
    />
  </Container>
);

export default withLocation(Main);
