import styled from "styled-components";

export const CardComponent = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const CardImagem = styled.img`
  max-width: 100%;
`;
export const CardInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  /* border: 2px solid white; */
  border-radius: 20px;
  padding: 20px;
`;
export const CardInfosTitulo = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
`;

export const CardInfosSubTitulo = styled.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 20px;
`;

export const CardInfosTexto = styled.p`
  color: white;
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
`;

export const CardTecnologias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
`;
export const CardIcone = styled.img`
  max-width: 30px;
`;

export const CardBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const CardBotao = styled.a`
  background-color: rgb(237, 218, 13);
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: black;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  width: 80px;
  margin-bottom: 10px;
`;

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
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  height: 60%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;
export const ModalBotaoFechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
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
  max-height: 60vh;
  object-fit: contain;
  border-radius: 10px;
`;

export const ModalInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;
export const ModalTitulo = styled.h2`
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: bold;
  color: #333;
  text-align: start;
`;

export const ModalDescricao = styled.p`
  font-size: 1rem;
  color: #888;
  text-align: start;
`;

export const ModalAreas = styled.p`
  font-size: 0.8rem;
  color: #777;
  font-weight: bold;
  word-spacing: 4px;
`;

export const ModalBotao = styled.button`
  margin-top: 40px;
  border: none;
  background-color: #00f3ff;
  font-weight: bold;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  width: 100%;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #04a2aa;
  }
`;
