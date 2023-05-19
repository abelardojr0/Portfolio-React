import React from "react";
import {
  Cloud,
  Cloudx1,
  Cloudx2,
  Cloudx3,
  Cloudx4,
  Cloudx5,
  DiaComponent,
  DiaComponentWrap,
} from "./DiaStyles";
import Header from "../../Components/Header.js/Header";
import Inicio from "../Inicio/Inicio";
import Sobre from "../Sobre/Sobre";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Contato from "../Contato/Contato";
import Footer from "../Footer/Footer";
import Resumo from "../Resumo/Resumo";

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
    <DiaComponent className="animaEsquerda">
      <DiaComponentWrap>
        <Cloudx1>
          <Cloud />
        </Cloudx1>

        <Cloudx2>
          <Cloud />
        </Cloudx2>

        <Cloudx3>
          <Cloud />
        </Cloudx3>

        <Cloudx4>
          <Cloud />
        </Cloudx4>

        <Cloudx5>
          <Cloud />
        </Cloudx5>
      </DiaComponentWrap>
      <Header />
      <Inicio />
      <Sobre />
      <Resumo />
      <Portfolio />
      <Skills />
      <Contato />
      <Footer />
    </DiaComponent>
  );
};

export default Dia;
