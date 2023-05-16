import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const ModalComponent = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalCard = styled.div`
  background-color: #0c2336;
  padding: 20px;
  border-radius: 20px;
  max-height: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  &.dia {
    background-color: #95dff8;
  }
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
export const ModalBotaoFechar = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
  ${responsivo(breakpoints.tablet)} {
    font-size: 1.8rem;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 1.5rem;
  }
`;

export const ModalImagem = styled.img`
  width: 80%;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 20px;
  ${responsivo(breakpoints.desktop)} {
    margin-top: 30px;
    width: 70%;
  }
  ${responsivo(breakpoints.tablet)} {
    margin-top: 20px;
  }
  ${responsivo(breakpoints.mobile)} {
    margin-top: 10px;
  }
`;

export const ModalInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const ModalTitulo = styled.h2`
  font-size: 2.5rem;
  margin-top: 10px;
  font-weight: bold;
  color: #fff;
  ${responsivo(breakpoints.desktop)} {
    font-size: 2.5rem;
  }
  ${responsivo(breakpoints.tablet)} {
    font-size: 2.2rem;
  }
  ${responsivo(breakpoints.tablet)} {
    font-size: 1.8rem;
  }
  &.dia {
    color: black;
  }
`;

export const ModalSubTitulo = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #ececec;
  ${responsivo(breakpoints.desktop)} {
    font-size: 1.4rem;
    line-height: 1.2;
  }
  ${responsivo(breakpoints.tablet)} {
    font-size: 1.2rem;
    line-height: 1.3;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 1rem;
    line-height: 1;
  }
  &.dia {
    color: #888;
  }
`;

export const ModalDescricao = styled.p`
  font-size: 1.2rem;
  color: #cdcdcd;
  ${responsivo(breakpoints.desktop)} {
    font-size: 1.1rem;
    line-height: 1.3;
  }
  ${responsivo(breakpoints.tablet)} {
    font-size: 1rem;
    line-height: 1.3;
  }
  ${responsivo(breakpoints.mobile)} {
    font-size: 0.7rem;
    line-height: 1;
  }
  &.dia {
    color: #777;
  }
`;

export const ModalTecnologias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
`;
export const ModalIcone = styled.img`
  max-width: 50px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 50px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 45px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 30px;
  }
`;

export const ModalBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ModalBotao = styled.a`
  background-color: rgb(237, 218, 13);
  text-decoration: none;
  padding: 0.8rem 1.4rem;
  color: black;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  ${responsivo(breakpoints.tablet)} {
    width: 100px;
    font-size: 1.2rem;
    margin-top: 10px;
  }
  ${responsivo(breakpoints.mobile)} {
    width: 80px;
    font-size: 1rem;
    margin-top: 0px;
  }
  &.dia {
    background-color: rgb(237, 28, 9);
  }
`;
