import React from "react";
import {
  InicioComponent,
  InicioFoto,
  InicioFuncao,
  InicioNome,
  InicioSociais,
} from "./InicioStyles";

import { Divisoria, TelaCarregando } from "../../GlobalStyles";
import { PropagateLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Api from "../../Api";

const Inicio = () => {
  const [foto, setFoto] = React.useState();
  const [detalhe, setDetalhe] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();
  const [carregando, setCarregando] = React.useState(true);
  const icone = "icone";

  React.useEffect(() => {
    Api.get("/imagens/perfil")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          setFoto(response.data[0][1]);
        } else {
          setFoto(response.data[1][1]);
        }
        setTimeout(() => {
          setCarregando(false);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    Api.get("/imagens/divisoria")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          setDetalhe(response.data[0][1]);
          setDetalheNome("aviao");
          setModo("dia");
        } else {
          setDetalhe(response.data[1][1]);
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
      {carregando ? (
        <TelaCarregando>
          <PropagateLoader color="rgb(237, 218, 13)" />
        </TelaCarregando>
      ) : (
        <>
          <InicioComponent id="inicio" className={"sessao ativo"}>
            <InicioFoto src={foto} alt="foto" />
            <InicioNome className={modo}>Abelardo Júnior</InicioNome>
            <InicioFuncao className={modo}>
              Desenvolvedor Fullstack
            </InicioFuncao>
            <InicioSociais>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/abelardojr0"
              >
                <FontAwesomeIcon
                  className={icone + " " + modo}
                  size="3x"
                  icon={faGithub}
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abelardo-junior/"
              >
                <FontAwesomeIcon
                  className={icone + " " + modo}
                  size="3x"
                  icon={faLinkedin}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=5585985300694"
              >
                <FontAwesomeIcon
                  className={icone + " " + modo}
                  size="3x"
                  icon={faWhatsapp}
                />
              </a>
            </InicioSociais>
            <Divisoria>
              <hr className={modo} />
              <img className={detalheNome} src={detalhe} alt="imagem" />
            </Divisoria>
          </InicioComponent>
        </>
      )}
    </>
  );
};

export default Inicio;
