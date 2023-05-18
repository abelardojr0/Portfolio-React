import React from "react";
import {
  ContatoBotao,
  ContatoComponent,
  ContatoDivisoria,
  ContatoFormulario,
  ContatoImagemDetalhe,
  ContatoNave,
  ContatoSociais,
  ContatoSociaisNave,
} from "./ContatoStyles";
import { TituloGeral } from "../../GlobalStyles";
import Input from "../../Components/Input/Input";
import TextArea from "../../Components/Input/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Api from "../../Api";

const Contato = () => {
  const [nome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [assunto, setAssunto] = React.useState();
  const [mensagem, setMensagem] = React.useState();
  const [modo, setModo] = React.useState();
  const [detalheMaior, setDetalheMaior] = React.useState();
  const icone = "icone";

  React.useEffect(() => {
    Api.get("/corpo")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          console.log(response.data);
          setModo("dia");
          setDetalheMaior(response.data[12][1].replace("$", "?"));
        } else {
          setModo("");
          setDetalheMaior(response.data[13][1].replace("$", "?"));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <ContatoComponent id="contato" className="sessao">
        <TituloGeral className={modo}>Contato</TituloGeral>
        <ContatoDivisoria>
          <ContatoFormulario>
            <Input
              htmlFor={"nome"}
              texto={"Nome"}
              tipo={"text"}
              nome={"nome"}
              id={"nome"}
              required={true}
              setDados={setNome}
              dados={nome}
              modo={modo}
            />
            <Input
              htmlFor={"email"}
              texto={"Email"}
              tipo={"email"}
              nome={"email"}
              id={"email"}
              required
              setDados={setEmail}
              dados={email}
              modo={modo}
            />
            <Input
              htmlFor={"assunto"}
              texto={"Assunto"}
              tipo={"text"}
              nome={"assunto"}
              id={"assunto"}
              required={true}
              setDados={setAssunto}
              dados={assunto}
              modo={modo}
            />
            <TextArea
              cols={25}
              rows={10}
              htmlFor={"mensagem"}
              texto={"Mensagem"}
              nome={"mensagem"}
              id={"mensagem"}
              required={true}
              setDados={setMensagem}
              dados={mensagem}
              modo={modo}
            />
            <ContatoBotao className={modo}>Enviar</ContatoBotao>
            <ContatoSociais>
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
            </ContatoSociais>
          </ContatoFormulario>
          <ContatoNave>
            <ContatoImagemDetalhe src={detalheMaior} alt="imagemDetalheMaior" />
            <ContatoSociaisNave className={modo}>
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
            </ContatoSociaisNave>
          </ContatoNave>
        </ContatoDivisoria>
      </ContatoComponent>
    </>
  );
};

export default Contato;
