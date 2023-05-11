import React from "react";
import { SobreComponent, SobreTexto } from "./SobreStyles";
import { Divisoria, TituloGeral } from "../../GlobalStyles";
import detalhe1 from "../../Image/adereços/divisoria-externa-noite.png";
import detalhe2 from "../../Image/adereços/divisoria-externa-dia.png";

const Sobre = () => {
  const [detalhe, setDetalhe] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();

  React.useEffect(() => {
    const pageAtual = window.location.href;
    if (pageAtual.includes("dia")) {
      setDetalhe(detalhe2);
      setDetalheNome("aviao");
      setModo("dia");
    } else {
      setDetalhe(detalhe1);
      setDetalheNome("foguete");
      setModo("");
    }
  }, []);
  return (
    <>
      <SobreComponent id="sobre" className="sessao">
        <TituloGeral className={modo}>Sobre</TituloGeral>
        <SobreTexto>
          <p className={modo}>
            Sempre gostei de tecnologia, por isso comecei minha jornada na área
            de T.I, me formei em 2014 em ADS, porém continuei trabalhando no
            setor de Infraestrutura.
          </p>
          <p className={modo}>
            Em 2022 decidi que iria investir na área de programação e me tornar
            o desenvolvedor que não me tornei em 2014. Desde então estou me
            dedicando diariamente a estudar o desenvolvimento de sistemas.
          </p>
        </SobreTexto>
      </SobreComponent>
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Sobre;
