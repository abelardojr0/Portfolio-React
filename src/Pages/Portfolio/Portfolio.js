import React from "react";
import {
  PortfolioCarousel,
  PortfolioComponent,
  PortfolioMeteoro1,
  PortfolioMeteoro2,
} from "./PortfolioStyles";
import { Divisoria, TituloGeral } from "../../GlobalStyles";
import CardPortfolio from "../../Components/CardPortfolio/CardPortfolio";
import Carousel from "better-react-carousel";
import Modal from "../../Components/Modal/Modal";
import Api from "../../Api";
import { NoiteEstrelas, NoiteEstrelasMenores } from "../Noite/NoiteStyles";

const Portfolio = () => {
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
  const [detalheMaior1, setDetalheMaior1] = React.useState();
  const [detalheMaior2, setDetalheMaior2] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState("noite");
  const [projetos, setProjetos] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [imagem, setImagem] = React.useState([]);
  const [titulo, setTitulo] = React.useState([]);
  const [subtitulo, setSubtitulo] = React.useState([]);
  const [texto, setTexto] = React.useState([]);
  const [tecnologias, setTecnologias] = React.useState([]);
  const [link, setLink] = React.useState([]);
  const [github, setGithub] = React.useState([]);

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
    if (window.innerWidth >= 1000) {
      const pageAtual = window.location.href;
      Api.get("/corpo")
        .then((response) => {
          if (pageAtual.includes("dia")) {
            setDetalheMaior1(response.data[6][1].replace("$", "?"));
            setDetalheMaior2(response.data[7][1].replace("$", "?"));
          } else {
            setDetalheMaior1(response.data[8][1].replace("$", "?"));
            setDetalheMaior2(response.data[9][1].replace("$", "?"));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const abrirModal = (
    imagem,
    titulo,
    subtitulo,
    texto,
    tecnologias,
    link,
    github
  ) => {
    setImagem(imagem);
    setTitulo(titulo);
    setSubtitulo(subtitulo);
    setTexto(texto);
    setTecnologias(tecnologias);
    setLink(link);
    setGithub(github);
    setModal(true);
  };
  const fecharModal = (e) => {
    if (
      e.target.getAttribute("id") === "modal" ||
      e.target.getAttribute("id") === "fechar"
    ) {
      setModal(false);
    }
  };

  React.useEffect(() => {
    Api.get("/projetos")
      .then((response) => {
        setProjetos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {modo !== "dia" && (
        <>
          <NoiteEstrelas />
          <NoiteEstrelasMenores />
        </>
      )}
      <PortfolioComponent id="portfolio" className="sessao">
        <PortfolioMeteoro1 src={detalheMaior1} alt="detalheMaior1" />
        <PortfolioMeteoro2 src={detalheMaior2} alt="detalheMaior2" />
        <TituloGeral className={modo}>Portfólio</TituloGeral>
        <PortfolioCarousel>
          <Carousel
            cols={1}
            rows={1}
            gap={"30px"}
            loop
            showDots={true}
            dot={MyDot}
            mobileBreakpoint={0}
          >
            {projetos.map((projeto) => (
              <Carousel.Item key={projeto}>
                <CardPortfolio
                  imagem={projeto[1].replace("$", "?")}
                  titulo={projeto[2]}
                  subtitulo={projeto[3]}
                  texto={projeto[4]}
                  tecnologias={projeto[5]}
                  link={projeto[6]}
                  github={projeto[7]}
                  abrirModal={abrirModal}
                  fecharModal={fecharModal}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </PortfolioCarousel>
      </PortfolioComponent>
      <Modal
        imagem={imagem}
        titulo={titulo}
        subtitulo={subtitulo}
        texto={texto}
        tecnologias={tecnologias}
        link={link}
        github={github}
        modal={modal}
        fecharModal={fecharModal}
        modo={modo}
      />
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Portfolio;
