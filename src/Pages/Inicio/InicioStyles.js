import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const InicioComponent = styled.section`
  height: 100%;
  width: 100%;
  padding-top: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const InicioFoto = styled.img`
  max-width: 500px;
  border-radius: 50%;
  margin-top: 0px;
  border: 4px solid white;
  margin-bottom: 20px;
  ${responsivo(breakpoints.tablet)} {
    margin-top: 50px;
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    margin-top: 100px;
    max-width: 300px;
  }
`;

export const InicioNome = styled.h1`
  font-size: 3rem;
  margin-top: 10px;
  color: white;
  margin-bottom: 20px;
  &.dia {
    color: black;
  }
  ${responsivo(breakpoints.tablet)} {
    font-size: 2.5rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 2rem;
  }
`;

export const InicioFuncao = styled.h2`
  @keyframes pulsando {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes pisca {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 2.2rem;
  color: rgb(237, 218, 13);
  font-weight: bold;
  overflow: hidden;
  animation: pulsando 1500ms infinite ease-in-out;
  ${responsivo(breakpoints.tablet)} {
    font-size: 1.8rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 1.4rem;
  }
  &.dia {
    color: rgb(237, 28, 9);
  }
  &:after {
    content: "|";
    margin-left: 2px;
    opacity: 1;
    animation: pisca 0.7s infinite;
  }
`;
export const InicioSociais = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  ${responsivo(breakpoints.tablet)} {
    max-width: 450px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;
