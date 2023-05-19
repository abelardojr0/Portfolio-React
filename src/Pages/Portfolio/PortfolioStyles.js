import styled, { keyframes } from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const PortfolioComponent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
`;

export const PortfolioCarousel = styled.div`
  max-width: 960px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    max-width: 768px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;
const pulsando = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
export const PortfolioMeteoro1 = styled.img`
  max-width: 150px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  animation: ${pulsando} 3s infinite ease-in-out;
  ${responsivo(breakpoints.desktop)} {
    display: none;
  }
  ${responsivo(breakpoints.tablet)} {
    display: none;
  }
  ${responsivo(breakpoints.mobile)} {
    display: none;
  }
`;
export const PortfolioMeteoro2 = styled.img`
  max-width: 150px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  animation: ${pulsando} 3s infinite ease-in-out;

  ${responsivo(breakpoints.desktop)} {
    display: none;
  }
  ${responsivo(breakpoints.tablet)} {
    display: none;
  }
  ${responsivo(breakpoints.mobile)} {
    display: none;
  }
`;
