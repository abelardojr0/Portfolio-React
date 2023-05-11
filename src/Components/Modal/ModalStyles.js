import styled from "styled-components";

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
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  &.dia {
    background-color: #95dff8;
  }
`;
export const ModalBotaoFechar = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

export const ModalImagem = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ModalInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const ModalTitulo = styled.h2`
  font-size: 1.8rem;
  margin-top: 10px;
  font-weight: bold;
  color: #fff;
  &.dia {
    color: black;
  }
`;

export const ModalSubTitulo = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
  color: #ececec;
  &.dia {
    color: #888;
  }
`;

export const ModalDescricao = styled.p`
  font-size: 0.7rem;
  color: #cdcdcd;
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
  max-width: 30px;
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
  padding: 0.5rem 1rem;
  color: black;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  width: 80px;
  margin-bottom: 10px;
  &.dia {
    background-color: rgb(237, 28, 9);
  }
`;
