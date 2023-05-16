import React from "react";
import {
  CardExperienciaCentro,
  CardExperienciaComponent,
  CardExperienciaLadoDireito,
  CardExperienciaLadoEsquerdo,
  CardExperienciaSubtitulo,
  CardExperienciaTexto,
  CardExperienciaTituloDireita,
  CardExperienciaTituloEsquerda,
} from "./CardExperienciaStyles";
import Api from "../../Api";

const CardExperiencia = ({ titulo1, subtitulo, imagem, titulo2, texto }) => {
  const [detalhes, setDetalhes] = React.useState();
  const [modo, setModo] = React.useState();

  React.useEffect(() => {
    const pageAtual = window.location.href;
    if (pageAtual.includes("dia")) {
      Api.get("/imagens/detalhes")
        .then((response) => {
          setDetalhes({
            1: response.data[1][1],
            2: response.data[3][1],
            3: response.data[5][1],
            4: response.data[7][1],
            5: response.data[9][1],
          });
        })
        .catch((error) => {
          console.log(error);
        });
      setModo("dia");
    } else {
      Api.get("/imagens/detalhes")
        .then((response) => {
          setDetalhes({
            1: response.data[0][1],
            2: response.data[2][1],
            3: response.data[4][1],
            4: response.data[6][1],
            5: response.data[8][1],
          });
        })
        .catch((error) => {
          console.log(error);
        });
      setModo("");
    }
  }, []);
  return (
    <CardExperienciaComponent>
      <CardExperienciaLadoEsquerdo>
        <CardExperienciaTituloEsquerda className={modo}>
          {titulo1}
        </CardExperienciaTituloEsquerda>
        <CardExperienciaSubtitulo className={modo}>
          {subtitulo}
        </CardExperienciaSubtitulo>
      </CardExperienciaLadoEsquerdo>
      <CardExperienciaCentro>
        {detalhes && <img src={detalhes[imagem]} alt="imagem" />}
      </CardExperienciaCentro>
      <CardExperienciaLadoDireito>
        <CardExperienciaTituloDireita className={modo}>
          {titulo2}
        </CardExperienciaTituloDireita>
        <CardExperienciaTexto className={modo}>{texto}</CardExperienciaTexto>
      </CardExperienciaLadoDireito>
    </CardExperienciaComponent>
  );
};

export default CardExperiencia;
