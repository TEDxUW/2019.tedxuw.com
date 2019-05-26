import React from "react";
import styled from "styled-components";

import BackgroundImageTop from "~static/img/bg_1.svg";
import BackgroundImageBottom from "~static/img/bg_2.svg";

const trianglePositions = [
  { x: 20, y: 30, d: 3 },
  { x: 100, y: 300, d: 4.3 },
  { x: 204, y: 100, d: 5.9 },
];

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;

  overflow: hidden;
  z-index: -1;

  & > img {
    position: absolute;
    bottom: -100px;

    width: 100vw;
  }
`;

const Triangle = styled.span`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;

  width: 15px;
  height: 15px;

  background-color: ${props => props.theme.colors.primary};
  animation: float ${props => props.animDuration}s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

const Background = () => (
  <>
    <Container>
      <img src={BackgroundImageTop} alt="Background shape" />
      <img src={BackgroundImageBottom} alt="Another background shape" />
    </Container>
    {trianglePositions.map(({ x, y, d }) => (
      <Triangle x={x} y={y} animDuration={d} />
    ))}
  </>
  
);

export default Background;
