import React, { useState } from "react";
import { MoonIcon, SunIcon, ToggleContainer, ToggleIcon } from "./ToogleStyles";
import { useNavigate } from "react-router-dom";

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("modo") || []
  );
  const navigate = useNavigate();

  const handleToggleClick = React.useCallback(() => {
    if (isDarkMode === "dark" || []) {
      setIsDarkMode("light");
      localStorage.setItem("modo", "light");
    }
    if (isDarkMode === "light") {
      setIsDarkMode("dark");
      localStorage.setItem("modo", "dark");
    }
  }, [isDarkMode]);

  React.useEffect(() => {
    if (isDarkMode === "light") {
      navigate("/dia");
    } else if (isDarkMode === "dark") {
      navigate("/");
    }
  }, [isDarkMode, navigate]);

  const [mostrarMenu, setMostrarMenu] = React.useState(true);
  React.useEffect(() => {
    let ultimaPosicao = 0;
    function scrollando() {
      const posicaoAtual = window.scrollY;
      if (ultimaPosicao > posicaoAtual) {
        setMostrarMenu(true);
      } else {
        setMostrarMenu(false);
      }
      ultimaPosicao = posicaoAtual;
    }
    document.addEventListener("scroll", scrollando);
  }, []);

  return (
    <>
      {mostrarMenu && (
        <ToggleContainer className={isDarkMode}>
          <ToggleIcon onClick={handleToggleClick}>
            {isDarkMode === "light" ? <SunIcon /> : <MoonIcon />}
          </ToggleIcon>
        </ToggleContainer>
      )}
    </>
  );
};

export default Toggle;
