import React from "react";
import {
  InicioComponent,
  InicioFoto,
  InicioFuncao,
  InicioNome,
} from "./InicioStyles";

import foto1 from "../../Image/perfis/perfil-noite.jpg";
import foto2 from "../../Image/perfis/perfil-dia.jpg";
import detalhe1 from "../../Image/adereços/divisoria-externa-noite.png";
import detalhe2 from "../../Image/adereços/divisoria-externa-dia.png";
import { Divisoria } from "../../GlobalStyles";
const Inicio = () => {
  const [foto, setFoto] = React.useState();
  const [detalhe, setDetalhe] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();

  React.useEffect(() => {
    const pageAtual = window.location.href;
    if (pageAtual.includes("dia")) {
      setFoto(foto2);
      setDetalhe(detalhe2);
      setDetalheNome("aviao");
      setModo("dia");
    } else {
      setFoto(foto1);
      setDetalhe(detalhe1);
      setDetalheNome("foguete");
      setModo("");
    }
  }, []);

  return (
    <>
      <InicioComponent id="inicio" className="sessao">
        <InicioFoto src={foto} alt="foto" />
        <InicioNome className={modo}>Abelardo Júnior</InicioNome>
        <InicioFuncao className={modo}>Desenvolvedor Fullstack</InicioFuncao>
        <Divisoria>
          <hr className={modo} />
          <img className={detalheNome} src={detalhe} alt="imagem" />
        </Divisoria>
      </InicioComponent>
    </>
  );
};

export default Inicio;
