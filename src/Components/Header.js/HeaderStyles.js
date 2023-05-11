import styled from "styled-components";
import nave from "../../Image/adereços/navcat.png";

export const HeaderComponent = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 350px;
  height: 100px;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.12),
    0 22.3px 17.9px rgba(0, 0, 0, 0.08), 0 100px 80px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  color: #fff;
  z-index: 2;
  padding-bottom: 20px;
  &.dia {
    background-color: #95dff8;
  }
`;
export const HeaderLua = styled.img`
  max-width: 60px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const HeaderEstrelas = styled.img`
  max-width: 60px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const HeaderEstrelinhas = styled.img`
  max-width: 150px;
  position: absolute;
  top: -5px;
  left: 25%;
`;

export const HeaderLista = styled.ul`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  li {
    a {
      text-decoration: none;
      color: #898582;
      font-size: 0.8rem;
      font-weight: bold;
      cursor: pointer;
      &.ativo {
        color: white;
      }

      &:hover {
        transform: scale(1.01);
      }
    }
  }
`;

export const HeaderNave = styled.div`
  position: absolute;
  z-index: 2;
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%);
  top: calc(${({ style }) => style.top}px + 20px);
  left: ${({ style }) => style.left}px;
  background-image: url(${nave});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: left 400ms ease;
`;

export const HeaderNaveLuz = styled.div`
  position: absolute;
  /* left: -25%;
  top: 45px; */
  /* width: 160%; */
  left: -10px;
  top: 45px;
  width: 140%;
  height: 90px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) -50%,
    rgba(255, 255, 255, 0) 90%
  );
  clip-path: polygon(5% 100%, 35% 0px, 60% 0px, 95% 100%);
  pointer-events: none;
`;

//DIA
