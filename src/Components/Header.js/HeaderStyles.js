import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

const nave =
  "https://drive.google.com/uc?export=view&id=1qZwLGbsm2Ut65m6S-vz5sx-_UHeQ4YGc";
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
  padding-top: 10px;
  &.dia {
    background-color: #95dff8;
  }
`;
export const HeaderLua = styled.img`
  max-width: 100px;
  position: absolute;
  top: 10px;
  right: 60px;
  ${responsivo(breakpoints.tablet)} {
    max-width: 80px;
    right: 20px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 60px;
    right: 30px;
  }
`;

export const HeaderEstrelas = styled.img`
  max-width: 100px;
  position: absolute;
  top: 10px;
  left: 30px;
  ${responsivo(breakpoints.tablet)} {
    max-width: 80px;
    left: 20px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 60px;
    left: 10px;
  }
`;

export const HeaderEstrelinhas = styled.img`
  display: none;
  position: absolute;
  top: -5px;
  left: 25%;
  ${responsivo(breakpoints.desktop)} {
    display: block;
    max-width: 150px;
  }
  ${responsivo(breakpoints.tablet)} {
    display: block;
    max-width: 200px;
  }
  ${responsivo(breakpoints.tablet)} {
    display: block;

    max-width: 150px;
  }
`;

export const HeaderLista = styled.ul`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  gap: 80px;
  ${responsivo(breakpoints.desktop)} {
    gap: 60px;
  }
  ${responsivo(breakpoints.tablet)} {
    gap: 40px;
  }
  ${responsivo(breakpoints.tablet)} {
    gap: 20px;
  }
  li {
    a {
      text-decoration: none;
      color: #898582;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      ${responsivo(breakpoints.tablet)} {
        font-size: 1rem;
      }
      ${responsivo(breakpoints.tablet)} {
        font-size: 0.8rem;
      }
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
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  top: calc(${({ style }) => style.top}px + 20px);
  left: ${({ style }) => style.left}px;
  background-image: url(${nave});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: left 400ms ease;
  ${responsivo(breakpoints.tablet)} {
    width: 80px;
    height: 80px;
  }
  ${responsivo(breakpoints.mobile)} {
    width: 70px;
    height: 70px;
  }
`;

export const HeaderNaveLuz = styled.div`
  position: absolute;
  left: -27px;
  top: 50px;
  width: 160%;
  height: 90px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) -50%,
    rgba(255, 255, 255, 0) 90%
  );
  clip-path: polygon(5% 100%, 35% 0px, 60% 0px, 95% 100%);
  pointer-events: none;
  ${responsivo(breakpoints.tablet)} {
    width: 150%;
    left: -18px;
  }
  ${responsivo(breakpoints.mobile)} {
    left: -10px;
    width: 140%;
  }
`;
export const HeaderLogo = styled.img`
  max-width: 120px;
  margin-right: 50px;
  ${responsivo(breakpoints.mobile)} {
    margin-right: 0px;
  }
`;
export const HeaderOpcoesMobile = styled.a`
  color: #898582;
  text-decoration: none;
  position: relative;
  &.ativo_mobile {
    color: white;
    &::after,
    &::before {
      display: block;
    }
  }
  &::before {
    content: "";
    display: none;
    background-image: url(${nave});
    background-position: center;
    background-size: cover;
    width: 60px;
    height: 60px;
    position: absolute;
    left: -60px;
    top: -20px;
    transform: rotate(-90deg);
  }
  &::after {
    content: "";
    display: none;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) -50%,
      rgba(255, 255, 255, 0) 90%
    );
    clip-path: polygon(100% 5%, 0% 35%, 0% 60%, 100% 95%);
    pointer-events: none;
    width: 120%;
    height: 80px;
    position: absolute;
    left: -20px;
    top: -28px;
  }
`;
