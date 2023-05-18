import React from "react";
import { CardComponent, CardImagem } from "./CardPortfolioStyles";

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
  return (
    <>
      <CardComponent>
        <CardImagem
          src={imagem}
          alt={titulo}
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
