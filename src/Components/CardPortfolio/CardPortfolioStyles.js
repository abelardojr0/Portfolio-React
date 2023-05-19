import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const CardComponent = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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
export const CardImagem = styled.img`
  max-width: 100%;
  cursor: pointer;
`;
