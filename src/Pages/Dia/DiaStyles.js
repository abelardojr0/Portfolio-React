import styled from "styled-components";
import { keyframes } from "styled-components";
// export const DiaComponent = styled.section`
//   background: #00b4ff;
//   color: #333;
//   font: 100% Arial, Sans Serif;
//   height: 100vh;
//   margin: 0;
//   padding: 0;
//   overflow-x: hidden;
// `;
export const DiaComponent = styled.section`
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #2abff1, #87ceeb);
  position: relative;
`;

export const DiaComponentWrap = styled.section`
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
`;

const animateCloud = keyframes`
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
`;

/* ANIMATIONS */

export const Cloudx1 = styled.div`
  animation: ${animateCloud} 35s linear infinite;

  -webkit-transform: scale(0.65);
  -moz-transform: scale(0.65);
  transform: scale(0.65);
`;

export const Cloudx2 = styled.div`
  animation: ${animateCloud} 20s linear infinite;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
`;

export const Cloudx3 = styled.div`
  animation: ${animateCloud} 30s linear infinite;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
`;

export const Cloudx4 = styled.div`
  animation: ${animateCloud} 18s linear infinite;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
`;

export const Cloudx5 = styled.div`
  animation: ${animateCloud} 25s linear infinite;

  -webkit-transform: scale(0.55);
  -moz-transform: scale(0.55);
  transform: scale(0.55);
`;

/* OBJECTS */

export const Cloud = styled.div`
  background: #fff;
  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(5%, #fff),
    color-stop(100%, #f1f1f1)
  );
  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

  height: 120px;
  position: relative;
  width: 350px;
  &:after,
  &:before {
    background: #fff;
    content: "";
    position: absolute;
  }
  &:after {
    display: block;
    border-radius: 100px;
    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }
  &:before {
    border-radius: 200px;
    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
`;
