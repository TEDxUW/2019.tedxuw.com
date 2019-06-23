import React from "react";
import styled from "styled-components";

import BackgroundImageTop from "~static/img/bg_1.svg";
import BackgroundImageBottom from "~static/img/bg_2.svg";
import TriangleImg from "~static/img/triangle.svg";

const triangles = [
  { x: 75, y: -45, d: 5.4 }, // top center
  { x: -385, y: -52, d: 4.1 }, // top left
  { x: -45, y: 200, d: 3.8 }, // bottom center
  { x: -420, y: 240, d: 3.6 }, // bottom left
  { x: 460, y: -10, d: 5.1 }, // top right
  { x: 500, y: 200, d: 3.6 }, // bottom right
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

const TriangleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;
`;

const Triangle = styled.span`
  position: absolute;

  display: inline-block;
  width: 60px;
  height: 60px;

  transform: ${({ x, y, animDuration }) =>
    `
      translate(${x}px, ${y}px)
      rotate(${animDuration * 40 + Math.random() * 50}deg) 
      scale(${animDuration / 10})
    `};

  & > img {
    width: 100%;
    animation: float ${props => props.animDuration}s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      45% {
        transform: translatey(-10px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }
`;

const Background = () => (
  <Container>
    <img src={BackgroundImageTop} alt="Background shape" />
    <img src={BackgroundImageBottom} alt="Another background shape" />
    <TriangleContainer>
      {triangles.map(({ x, y, d }) => (
        <Triangle key={`${x}-${y}-${d}`} x={x} y={y} animDuration={d}>
          <img src={TriangleImg} alt="A floating triangle" />
        </Triangle>
      ))}
    </TriangleContainer>
  </Container>
);

export default Background;
