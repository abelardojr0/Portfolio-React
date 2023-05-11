import React from "react";
import {
  ModalBotao,
  ModalBotaoFechar,
  ModalBotoes,
  ModalCard,
  ModalComponent,
  ModalDescricao,
  ModalIcone,
  ModalImagem,
  ModalInfos,
  ModalSubTitulo,
  ModalTecnologias,
  ModalTitulo,
} from "./ModalStyles";
import react from "../../Image/tecnologias/react.png";
import js from "../../Image/tecnologias/js.png";
import html from "../../Image/tecnologias/html.png";
import css from "../../Image/tecnologias/css.png";
import sass from "../../Image/tecnologias/sass.png";
import git from "../../Image/tecnologias/git.png";
import node from "../../Image/tecnologias/node.png";
import postgreSQL from "../../Image/tecnologias/postgreSQL.png";
import mysql from "../../Image/tecnologias/mysql.png";
import styled_components from "../../Image/tecnologias/styled-components.png";
import typescript from "../../Image/tecnologias/typescript.png";
import flask from "../../Image/tecnologias/flask.png";
import python from "../../Image/tecnologias/python.png";

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

const Modal = ({
  fecharModal,
  imagem,
  titulo,
  subtitulo,
  texto,
  tecnologias,
  link,
  github,
  modal,
  modo,
}) => {
  const tecs = {
    react,
    js,
    html,
    css,
    sass,
    git,
    node,
    postgreSQL,
    mysql,
    styled_components,
    typescript,
    flask,
    python,
  };

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
      {modal && (
        <ModalComponent id="modal" onClick={fecharModal}>
          <ModalCard className={modo}>
            <ModalBotaoFechar id="fechar" onClick={fecharModal}>
              X
            </ModalBotaoFechar>
            <ModalImagem src={thumbs[imagem]} alt={titulo} />
            <ModalInfos>
              <ModalTitulo className={modo}>{titulo}</ModalTitulo>
              <ModalSubTitulo className={modo}>{subtitulo}</ModalSubTitulo>
              <ModalDescricao className={modo}>{texto}</ModalDescricao>
              <ModalTecnologias>
                {tecnologias &&
                  tecnologias.map((tecnologia) => (
                    <ModalIcone src={tecs[tecnologia]} alt={tecnologia} />
                  ))}
              </ModalTecnologias>
            </ModalInfos>
            <ModalBotoes>
              <ModalBotao className={modo} target="_blank" href={link}>
                Site
              </ModalBotao>
              <ModalBotao className={modo} target="_blank" href={github}>
                Github
              </ModalBotao>
            </ModalBotoes>
          </ModalCard>
        </ModalComponent>
      )}
    </>
  );
};

export default Modal;
