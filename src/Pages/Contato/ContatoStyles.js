import styled, { keyframes } from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const ContatoComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ContatoDivisoria = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    max-width: 768px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 350px;
  }
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
export const ContatoNave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  align-self: flex-start;
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
const abducao = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-100px) rotate(5deg);
  }
  100% {
    transform: translateY(-200px) rotate(-5deg);
  }
`;

export const ContatoSociaisNave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 250px;
  animation: ${abducao} 5s linear infinite;
  &.dia {
    display: none;
  }
`;

export const ContatoImagemDetalhe = styled.img`
  max-width: 600px;
  animation: ${movendo} 5s infinite linear;
  align-self: flex-start;
  z-index: 3;
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

export const ContatoFormulario = styled.form`
  max-width: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  ${responsivo(breakpoints.desktop)} {
    max-width: 600px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;
export const ContatoBotao = styled.button`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid white;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 2.5rem;
  background-color: rgb(237, 218, 13);
  color: black;
  cursor: pointer;
  ${responsivo(breakpoints.tablet)} {
    font-size: 2.5rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 2rem;
  }
  &:hover {
    transform: scale(1.02);
  }
  &.dia {
    background-color: rgb(237, 28, 9);
    border: 2px solid black;
  }
`;
export const ContatoSociais = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 960px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 768px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
  margin-top: 30px;
`;
