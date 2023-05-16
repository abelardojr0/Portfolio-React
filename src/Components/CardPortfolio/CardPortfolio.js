import React from "react";
import { CardComponent, CardImagem } from "./CardPortfolioStyles";

import Api from "../../Api";

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
  const [imagens, setImagens] = React.useState();

  React.useEffect(() => {
    Api.get("/imagens/projetos")
      .then((response) => {
        setImagens({
          rec: response.data[13][1],
          busca_caucaia: response.data[4][1],
          meu_bg: response.data[8][1],
          tech_book: response.data[5][1],
          portfolio_felipe: response.data[10][1],
          pokemon: response.data[3][1],
          mais_ou_menos: response.data[18][1],
          portfolio: response.data[11][1],
          comic_quizz: response.data[19][1],
          hero_memory: response.data[17][1],
          up_the_irons: response.data[12][1],
          find: response.data[7][1],
          orkut: response.data[2][1],
          pokedex: response.data[9][1],
          animais: response.data[21][1],
          bikcraft: response.data[6][1],
          robotron: response.data[14][1],
          flexblog: response.data[16][1],
          mochila_viagem: response.data[1][1],
          wildbeast: response.data[15][1],
          bomgosto: response.data[20][1],
          midi: response.data[0][1],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CardComponent>
        {imagens && (
          <CardImagem
            src={imagens[imagem]}
            alt={imagem}
            onClick={() =>
              abrirModal(
                imagens[imagem],
                titulo,
                subtitulo,
                texto,
                tecnologias,
                link,
                github
              )
            }
          />
        )}
      </CardComponent>
    </>
  );
};

export default CardPortfolio;
