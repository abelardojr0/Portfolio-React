import styled, { keyframes } from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const ResumoComponent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
`;

const movendo = keyframes`
  0% {
    transform: translate3d(0, -20px, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -20px, 0);
  }
`;

export const ResumoImagemDetalhe = styled.img`
  max-width: 350px;
  animation: ${movendo} 5s infinite linear;
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
export const ResumoTexto = styled.p`
  font-size: 1.2rem;
  color: white;
  max-width: 500px;
  line-height: 1.4;
  text-align: center;
  &.dia {
    color: #535353;
  }
`;
export const ResumoSubtitulo = styled.h2`
  font-size: 1.7rem;
  color: rgb(237, 218, 13);
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 40px;
  &.dia {
    color: rgb(237, 28, 9);
  }
`;
export const ResumoCarousel = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    max-width: 700px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;

export const ResumoBotaoCurriculo = styled.a`
  background-color: rgb(237, 218, 13);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: black;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  &.dia {
    background-color: rgb(237, 28, 9);
    color: white;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
