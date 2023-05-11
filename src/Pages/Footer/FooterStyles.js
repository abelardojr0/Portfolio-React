import styled from "styled-components";

export const FooterComponent = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 20px;
  &.dia {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const FooterTitulo = styled.h1`
  font-size: 1rem;
  color: white;
  &.dia {
    color: black;
  }
`;
export const FooterSubTitulo = styled.h1`
  font-size: 0.8rem;
  color: white;
  &.dia {
    color: black;
  }
`;
