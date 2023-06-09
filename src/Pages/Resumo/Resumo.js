import React from "react";
import {
  ResumoBotaoCurriculo,
  ResumoCarousel,
  ResumoComponent,
  ResumoImagemDetalhe,
  ResumoSubtitulo,
  ResumoTexto,
} from "./ResumoStyles";
import Carousel from "better-react-carousel";
import CardExperiencia from "../../Components/CardExperiencia/CardExperiencia";
import { Divisoria, TituloGeral } from "../../GlobalStyles";
import Api from "../../Api";
import { NoiteEstrelas, NoiteEstrelasMenores } from "../Noite/NoiteStyles";

const Resumo = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "30px",
        display: "inline-block",
        height: isActive ? "16px" : "8px",
        width: isActive ? "16px" : "8px",
        background: isActive
          ? modo === "dia"
            ? "rgb(237, 28, 9)"
            : "rgb(237, 218, 13)"
          : "#313131",
        borderRadius: "50%",
      }}
    ></span>
  );
  const [detalhe, setDetalhe] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();
  const [experiencias, setExperiencias] = React.useState([]);
  const [cursos, setCursos] = React.useState([]);
  const [detalheMaior, setDetalheMaior] = React.useState();
  const [detalheMaior2, setDetalheMaior2] = React.useState();

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

  React.useEffect(() => {
    Api.get("/experiencia")
      .then((response) => {
        setExperiencias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    Api.get("/curso")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 1000) {
      Api.get("/corpo")
        .then((response) => {
          const pageAtual = window.location.href;
          if (pageAtual.includes("dia")) {
            setDetalheMaior(response.data[2][1].replace("$", "?"));
          } else {
            setDetalheMaior(response.data[3][1].replace("$", "?"));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 1000) {
      Api.get("/corpo")
        .then((response) => {
          const pageAtual = window.location.href;
          if (pageAtual.includes("dia")) {
            setDetalheMaior2(response.data[4][1].replace("$", "?"));
          } else {
            setDetalheMaior2(response.data[5][1].replace("$", "?"));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      {modo !== "dia" && (
        <>
          <NoiteEstrelas />
          <NoiteEstrelasMenores />
        </>
      )}
      <ResumoComponent id="resumo" className="sessao">
        <TituloGeral className={modo}>Resumo</TituloGeral>
        <ResumoTexto className={modo}>
          Estes são os principais pontos de ganho de experiência e títulos que
          obtive durante minha jornada.
        </ResumoTexto>
        <ResumoBotaoCurriculo
          className={modo}
          target="_blank"
          href="https://drive.google.com/file/d/1q5bwNXDSGSiV0UFlgFH8_lEb7UWIOR-8/view"
        >
          Currículo
        </ResumoBotaoCurriculo>
        <ResumoSubtitulo className={modo}>Experiências</ResumoSubtitulo>
        <ResumoImagemDetalhe src={detalheMaior} alt="detalheMaior" />
        <ResumoCarousel>
          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop
            showDots={true}
            dot={MyDot}
            mobileBreakpoint={0}
          >
            {experiencias &&
              experiencias.map((experiencia) => (
                <Carousel.Item key={experiencia[1]}>
                  <CardExperiencia
                    titulo1={experiencia[1]}
                    subtitulo={experiencia[2]}
                    titulo2={experiencia[3]}
                    texto={experiencia[4]}
                    imagem={experiencia[6]}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </ResumoCarousel>
        <ResumoSubtitulo className={modo}>Cursos</ResumoSubtitulo>
        <ResumoImagemDetalhe src={detalheMaior2} alt="detalheMaior" />
        <ResumoCarousel>
          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop
            showDots={true}
            dot={MyDot}
            mobileBreakpoint={0}
          >
            {cursos &&
              cursos.map((experiencia) => (
                <Carousel.Item key={experiencia[1]}>
                  <CardExperiencia
                    titulo1={experiencia[1]}
                    subtitulo={experiencia[2]}
                    titulo2={experiencia[3]}
                    texto={experiencia[4]}
                    imagem={experiencia[6]}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </ResumoCarousel>
      </ResumoComponent>
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Resumo;
