import React from "react";
import styled from "styled-components";

import BackgroundImageTop from "~static/img/bg_1.svg";
import BackgroundImageBottom from "~static/img/bg_2.svg";
import TriangleImg from "~static/img/triangle.svg";

const trianglePositions = [
  { x: 220, y: 345, d: 3 },
  { x: 200, y: 640, d: 4.3 },
  { x: 800, y: 315, d: 5.9 },
  { x: 650, y: 590, d: 4.6 },
  { x: 1080, y: 330, d: 3.6 },
  { x: 1175, y: 480, d: 3 },

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

  width: 60px;
  height: 60px;

  transform: rotate(${props => props.animDuration * 40 + Math.random() * 50}deg) scale(${props => props.animDuration / 10});

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
  <>
    <Container>
      <img src={BackgroundImageTop} alt="Background shape" />
      <img src={BackgroundImageBottom} alt="Another background shape" />
    </Container>
    {trianglePositions.map(({ x, y, d }) => (
      <Triangle x={x} y={y} animDuration={d}>
        <img src={TriangleImg}  />
      </Triangle>
    ))}
  </>
  
);

export default Background;
