import React from "react";
import { DiaComponent } from "./DiaStyles";
import Toggle from "../../Components/Toggle/Toggle";
import Header from "../../Components/Header.js/Header";
import Inicio from "../Inicio/Inicio";
import Sobre from "../Sobre/Sobre";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Contato from "../Contato/Contato";
import Footer from "../Footer/Footer";

const Dia = () => {
  React.useEffect(() => {
    const secoes = document.querySelectorAll(".sessao");
    const metadeTela = window.innerHeight * 0.8;
    function animaScroll() {
      secoes.forEach((secao) => {
        const secaoTop = secao.getBoundingClientRect().top;
        const aparecer = secaoTop - metadeTela;
        if (aparecer < 0) {
          secao.classList.add("ativo");
        } else {
          secao.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }, []);
  return (
    <DiaComponent>
      <Header />
      <Toggle />
      <Inicio />
      <Sobre />
      <Portfolio />
      <Skills />
      <Contato />
      <Footer />
    </DiaComponent>
  );
};

export default Dia;
