import React from "react";
import {
  SobreComponent,
  SobreDivisoria,
  SobreImagemDetalhe,
  SobreTexto,
} from "./SobreStyles";
import { Divisoria, TituloGeral } from "../../GlobalStyles";
import Api from "../../Api";

const Sobre = () => {
  const [detalhe, setDetalhe] = React.useState();
  const [detalheMaior, setDetalheMaior] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();

  React.useEffect(() => {
    Api.get("/corpo")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          setDetalheMaior(response.data[0][1].replace("$", "?"));
        } else {
          setDetalheMaior(response.data[1][1].replace("$", "?"));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    Api.get("/divisoria")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          setDetalhe(response.data[0][1].replace("$", "?"));
          setDetalheNome("aviao");
          setModo("dia");
        } else {
          setDetalhe(response.data[1][1].replace("$", "?"));
          setDetalheNome("foguete");
          setModo("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SobreComponent id="sobre" className="sessao">
        <TituloGeral className={modo}>Sobre</TituloGeral>
        <SobreDivisoria>
          <SobreTexto>
            <p className={modo}>
              Sempre gostei de tecnologia, por isso comecei minha jornada na
              área de T.I, me formei em 2014 em ADS, porém continuei trabalhando
              no setor de Infraestrutura.
            </p>
            <p className={modo}>
              Em 2022 decidi que iria investir na área de programação e me
              tornar o desenvolvedor que não me tornei em 2014. Desde então
              estou me dedicando diariamente a estudar o desenvolvimento de
              sistemas.
            </p>
          </SobreTexto>
          <SobreImagemDetalhe src={detalheMaior} alt="astronauta" />
        </SobreDivisoria>
      </SobreComponent>
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Sobre;
