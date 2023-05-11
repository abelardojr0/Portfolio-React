import React from "react";
import { CardComponent, CardImagem } from "./CardPortfolioStyles";

import rec from "../../Image/thumbnails/REC.png";
import busca_caucaia from "../../Image/thumbnails/busca-caucaia.png";
import meu_bg from "../../Image/thumbnails/meu-bg.png";
import consulta_cep from "../../Image/thumbnails/consulta-cep.png";
import portfolio_felipe from "../../Image/thumbnails/portfolio-felipe.png";
import pokemon from "../../Image/thumbnails/pokemon.png";
import mais_ou_menos from "../../Image/thumbnails/mais-ou-menos.png";
import portfolio from "../../Image/thumbnails/portfolio.png";
import comic_quizz from "../../Image/thumbnails/comic_quizz.png";
import hero_memory from "../../Image/thumbnails/hero_memory.png";
import up_the_irons from "../../Image/thumbnails/up_the_irons.png";
import find from "../../Image/thumbnails/find.png";
import orkut from "../../Image/thumbnails/orkut.png";
import pokedex from "../../Image/thumbnails/pokedex.png";
import animais from "../../Image/thumbnails/animais.png";
import bikcraft from "../../Image/thumbnails/bikcraft.png";
import robotron from "../../Image/thumbnails/robotron.png";
import flexblog from "../../Image/thumbnails/flexblog.png";
import mochila_viagem from "../../Image/thumbnails/mochila_viagem.png";
import wildbeast from "../../Image/thumbnails/wildbeast.png";
import bomgosto from "../../Image/thumbnails/bomgosto.png";

const CardPortfolio = ({
  imagem,
  titulo,
  subtitulo,
  texto,
  tecnologias,
  link,
  github,
  abrirModal,
}) => {
  const thumbs = {
    rec,
    busca_caucaia,
    meu_bg,
    consulta_cep,
    portfolio_felipe,
    pokemon,
    mais_ou_menos,
    portfolio,
    comic_quizz,
    hero_memory,
    up_the_irons,
    find,
    orkut,
    pokedex,
    animais,
    bikcraft,
    robotron,
    flexblog,
    mochila_viagem,
    wildbeast,
    bomgosto,
  };
  return (
    <>
      <CardComponent>
        <CardImagem
          src={thumbs[imagem]}
          alt={imagem}
          onClick={() =>
            abrirModal(
              imagem,
              titulo,
              subtitulo,
              texto,
              tecnologias,
              link,
              github
            )
          }
        />
      </CardComponent>
    </>
  );
};

export default CardPortfolio;
