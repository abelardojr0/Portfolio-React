import React from "react";
import { PortfolioCarousel, PortfolioComponent } from "./PortfolioStyles";
import { Divisoria, TituloGeral } from "../../GlobalStyles";
import CardPortfolio from "../../Components/CardPortfolio/CardPortfolio";
import Carousel from "better-react-carousel";
import detalhe1 from "../../Image/adereços/divisoria-externa-noite.png";
import detalhe2 from "../../Image/adereços/divisoria-externa-dia.png";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const Portfolio = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "30px",
        display: "inline-block",
        height: isActive ? "16px" : "8px",
        width: isActive ? "16px" : "8px",
        background: isActive ? "rgb(237, 218, 13)" : "#313131",
        borderRadius: "50%",
      }}
    ></span>
  );
  const [detalhe, setDetalhe] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();
  const rota = "http://127.0.0.1:5000";
  const [projetos, setProjetos] = React.useState([]);

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

  React.useEffect(() => {
    axios
      .get(rota + "/projetos")
      .then((response) => {
        setProjetos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [modal, setModal] = React.useState(false);
  const [imagem, setImagem] = React.useState([]);
  const [titulo, setTitulo] = React.useState([]);
  const [subtitulo, setSubtitulo] = React.useState([]);
  const [texto, setTexto] = React.useState([]);
  const [tecnologias, setTecnologias] = React.useState([]);
  const [link, setLink] = React.useState([]);
  const [github, setGithub] = React.useState([]);

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

  return (
    <>
      <PortfolioComponent id="portfolio" className="sessao">
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
            {projetos &&
              projetos.map((projeto) => (
                <Carousel.Item>
                  <CardPortfolio
                    imagem={projeto[1]}
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
