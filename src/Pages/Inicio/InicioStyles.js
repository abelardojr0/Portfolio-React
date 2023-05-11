import styled from "styled-components";

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
  max-width: 300px;
  border-radius: 50%;
  margin-top: 100px;
  border: 4px solid white;
`;

export const InicioNome = styled.h1`
  font-size: 2rem;
  margin-top: 10px;
  color: white;
  &.dia {
    color: black;
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
  margin-top: 10px;
  font-size: 1.4rem;
  color: rgb(237, 218, 13);
  font-weight: bold;
  overflow: hidden;
  animation: pulsando 1500ms infinite ease-in-out;
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
