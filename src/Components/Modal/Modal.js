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
    Api.get("/imagens/tecnologias")
      .then((response) => {
        setTecs({
          react: response.data[6][1],
          js: response.data[14][1],
          html: response.data[13][1],
          css: response.data[10][1],
          sass: response.data[7][1],
          git: response.data[12][1],
          node: response.data[3][1],
          postgreSQL: response.data[4][1],
          mysql: response.data[1][1],
          styled_components: response.data[8][1],
          typescript: response.data[9][1],
          flask: response.data[11][1],
          python: response.data[5][1],
          bootstrap: response.data[15][1],
          mongoDB: response.data[0][1],
          nextJS: response.data[2][1],
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
