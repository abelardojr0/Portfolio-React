import styled from "styled-components";
import Moon from "../../Image/adereços/lua.png";
import Sun from "../../Image/adereços/sol.png";
import responsivo, { breakpoints } from "../../Responsivo";

export const ToggleContainer = styled.div`
  position: fixed;
  top: 150px;
  right: 80px;
  width: 104px;
  height: 62px;
  border-radius: 35px;
  background-color: #0c2336;
  border: 4px solid #04121d;
  z-index: 2;
  &.light {
    background-color: #95dff8;
    border: 4px solid #669fb1;
  }
  ${responsivo(breakpoints.mobile)} {
    right: 20px;
  }
`;

export const ToggleIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MoonIcon = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ isOn }) => (isOn ? "100%" : "25%")};
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background-image: url(${Moon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: all 1s ease-in-out;
`;

export const SunIcon = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ isOn }) => (isOn ? "0%" : "75%")};
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  background-image: url(${Sun});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: all 1s ease-in-out;
`;
