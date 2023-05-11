import styled from "styled-components";

export const ContatoComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ContatoFormulario = styled.form`
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
export const ContatoBotao = styled.button`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid white;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 2rem;
  background-color: rgb(237, 218, 13);
  color: black;
  cursor: pointer;
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
  width: 300px;

  margin-top: 30px;
`;
