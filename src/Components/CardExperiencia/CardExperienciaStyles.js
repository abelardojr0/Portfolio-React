import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const CardExperienciaComponent = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  ${responsivo(breakpoints.mobile)} {
    flex-direction: column;
    gap: 20px;
  }
`;
export const CardExperienciaLadoEsquerdo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  ${responsivo(breakpoints.mobile)} {
    align-items: flex-start;
  }
`;
export const CardExperienciaLadoDireito = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  ${responsivo(breakpoints.mobile)} {
    align-self: center;
    padding-top: 0px;
  }
`;
export const CardExperienciaTituloEsquerda = styled.h2`
  color: white;
  font-size: 1.6rem;
  margin-bottom: 5px;
  font-weight: bold;
  margin-bottom: 10px;
  &.dia {
    color: black;
  }
`;
export const CardExperienciaSubtitulo = styled.span`
  color: #bababa;
  font-size: 1.2;
  font-style: italic;
  &.dia {
    color: #535353;
  }
`;

export const CardExperienciaCentro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    max-width: 60px;
    z-index: 3;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    width: 2px;
    background-color: #bababa;
    height: 300px;
    ${responsivo(breakpoints.mobile)} {
      width: 300px;
      height: 2px;
      left: 0;
      top: 35px;
    }
  }
`;

export const CardExperienciaTituloDireita = styled.h2`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 40px;
  position: relative;
  &.dia {
    color: black;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -30px;
    width: 50px;
    height: 5px;
    background-color: #bababa;
    &.dia {
      background-color: #535353;
    }
  }
`;

export const CardExperienciaTexto = styled.p`
  color: #bababa;
  line-height: 1.5;
  max-width: 400px;
  font-size: 1.2rem;
  margin-bottom: 100px;
  &.dia {
    color: #535353;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 100%;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 10px;
  }
`;
