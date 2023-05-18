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
import Api from "../../Api";

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
  const [tecs, setTecs] = React.useState();
  React.useEffect(() => {
    Api.get("/tec")
      .then((response) => {
        setTecs({
          react: response.data[0][1].replace("$", "?"),
          nextJS: response.data[1][1].replace("$", "?"),
          typescript: response.data[2][1].replace("$", "?"),
          styled_components: response.data[3][1].replace("$", "?"),
          js: response.data[4][1].replace("$", "?"),
          html: response.data[5][1].replace("$", "?"),
          css: response.data[6][1].replace("$", "?"),
          sass: response.data[7][1].replace("$", "?"),
          bootstrap: response.data[8][1].replace("$", "?"),
          node: response.data[9][1].replace("$", "?"),
          python: response.data[10][1].replace("$", "?"),
          flask: response.data[11][1].replace("$", "?"),
          postgreSQL: response.data[12][1].replace("$", "?"),
          mongoDB: response.data[13][1].replace("$", "?"),
          mysql: response.data[14][1].replace("$", "?"),
          git: response.data[15][1].replace("$", "?"),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {modal && (
        <ModalComponent id="modal" onClick={fecharModal}>
          <ModalCard className={modo}>
            <ModalBotaoFechar id="fechar" onClick={fecharModal}>
              X
            </ModalBotaoFechar>
            <ModalImagem src={imagem} alt={titulo} />
            <ModalInfos>
              <ModalTitulo className={modo}>{titulo}</ModalTitulo>
              <ModalSubTitulo className={modo}>{subtitulo}</ModalSubTitulo>
              <ModalDescricao className={modo}>{texto}</ModalDescricao>
              <ModalTecnologias>
                {tecnologias &&
                  tecnologias.map((tecnologia) => (
                    <ModalIcone
                      key={tecnologia}
                      src={tecs[tecnologia]}
                      alt={tecnologia}
                    />
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
