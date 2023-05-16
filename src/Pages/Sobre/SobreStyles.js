import styled, { keyframes } from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

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
// const rodando = keyframes`
// 0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

const movendo = keyframes`
  0% {
    transform: translate3d(0, -30px, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -30px, 0);
  }
`;

export const SobreDivisoria = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 768px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 350px;
  }
`;
export const SobreImagemDetalhe = styled.img`
  max-width: 480px;
  animation: ${movendo} 5s infinite linear;
  ${responsivo(breakpoints.desktop)} {
    display: none;
  }
  ${responsivo(breakpoints.tablet)} {
    display: none;
  }
  ${responsivo(breakpoints.mobile)} {
    display: none;
  }
`;
export const SobreTexto = styled.div`
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 768px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 350px;
  }
  p {
    line-height: 1.3;
    font-size: 1.5rem;
    color: white;
    ${responsivo(breakpoints.tablet)} {
      font-size: 1.2rem;
    }
    ${responsivo(breakpoints.mobile)} {
      font-size: 1rem;
    }
    &.dia {
      color: black;
    }
  }
`;
