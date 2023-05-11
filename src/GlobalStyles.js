import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
  height: 100vh;
  width: 100%;
  background-color: white;
}
`;

export const TituloGeral = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  color: white;
  font-family: "Chivo Mono", monospace;
  &.dia {
    color: black;
  }
`;
export const Divisoria = styled.span`
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  img {
    max-width: 50px;
    max-height: 50px;
  }
  hr {
    background-color: rgb(237, 218, 13);
    width: 100%;
    height: 5px;
    border-radius: 0px 60px 60px 0px;
    &.dia {
      background-color: rgb(237, 28, 9);
    }
  }
  .foguete,
  .aviao {
    transform: rotate(0.25turn);
  }
`;
