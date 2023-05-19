import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faFileSignature,
  faIdCardClip,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderLogo, HeaderOpcoesMobile } from "./HeaderStyles";

const MenuHamburguer = () => {
  const nave =
    "https://drive.google.com/uc?export=view&id=1qZwLGbsm2Ut65m6S-vz5sx-_UHeQ4YGc";
  // const [isOpen, setIsOpen] = React.useState(false);

  // React.useEffect(() => {
  //   const selecionado = document.querySelector(`[href="${atual}"]`);
  //   if (selecionado) {
  //     selecionado.classList.add("ativo_mobile");
  //   }
  // }, [atual]);

  // React.useEffect(() => {
  //   const closeMenu = () => {
  //     // setIsOpen(false);
  //   };
  //   window.addEventListener("resize", closeMenu);
  //   return () => {
  //     window.removeEventListener("resize", closeMenu);
  //   };
  // }, []);

  const handleLiClick = (e) => {
    const itens = document.querySelectorAll(".menu-nav");
    itens.forEach((item) => {
      item.classList.remove("ativo_mobile");
    });
    const item = e.target;
    localStorage.setItem("header_mobile", item.getAttribute("href"));
    item.classList.add("ativo_mobile");
  };
  // isOpen={isOpen}

  const handleMenuStateChange = (state) => {
    if (state.isOpen) {
      const atual = localStorage.getItem("header_mobile");
      const selecionado = document.querySelector(`[href="${atual}"]`);
      if (selecionado) {
        selecionado.classList.add("ativo_mobile");
      }
    }
  };
  return (
    <Menu onStateChange={handleMenuStateChange} zIndex={10}>
      <HeaderLogo src={nave} alt="logo" />

      <HeaderOpcoesMobile
        className="menu-nav ativo_header"
        onClick={handleLiClick}
        href="#inicio"
      >
        <FontAwesomeIcon className="hamburguer-icon" size="1x" icon={faHome} />
        Início
      </HeaderOpcoesMobile>
      <HeaderOpcoesMobile
        className="menu-nav"
        onClick={handleLiClick}
        href="#sobre"
      >
        <FontAwesomeIcon
          className="hamburguer-icon"
          size="1x"
          icon={faAddressCard}
        />
        Sobre
      </HeaderOpcoesMobile>
      <HeaderOpcoesMobile
        className="menu-nav"
        onClick={handleLiClick}
        href="#resumo"
      >
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1x"
          icon={faFileSignature}
        />
        Resumo
      </HeaderOpcoesMobile>
      <HeaderOpcoesMobile
        className="menu-nav"
        onClick={handleLiClick}
        href="#portfolio"
      >
        <FontAwesomeIcon
          className="hamburguer-icon"
          s
          size="1x"
          icon={faIdCardClip}
        />
        Portfólio
      </HeaderOpcoesMobile>
      <HeaderOpcoesMobile
        className="menu-nav"
        onClick={handleLiClick}
        href="#contato"
      >
        <FontAwesomeIcon
          className="hamburguer-icon"
          size="1x"
          icon={faAddressBook}
        />
        Contato
      </HeaderOpcoesMobile>
    </Menu>
  );
};

export default MenuHamburguer;
