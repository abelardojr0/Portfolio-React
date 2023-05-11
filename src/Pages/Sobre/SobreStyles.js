import styled from "styled-components";

export const SobreComponent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const SobreTexto = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  p {
    line-height: 1.3;
    font-size: 1.5;
    color: white;
    &.dia {
      color: black;
    }
  }
`;
