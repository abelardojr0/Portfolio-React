import React from "react";
import {
  HeaderComponent,
  HeaderEstrelas,
  HeaderEstrelinhas,
  HeaderLista,
  HeaderLua,
  HeaderNave,
  HeaderNaveLuz,
} from "./HeaderStyles";
import sol from "../../Image/adereços/sol.png";
import nuvem1 from "../../Image/adereços/nuvem1.png";
import nuvem2 from "../../Image/adereços/nuvem2.png";
import lua from "../../Image/adereços/lua.png";
import estrelas from "../../Image/adereços/estrelas.png";
import estrelinhas from "../../Image/adereços/estrelinhas.png";
const Header = () => {
  const [navePos, setNavePos] = React.useState({ top: 0, left: 0 });
  const [modo, setModo] = React.useState();
  const [astro, setAstro] = React.useState();
  const [detalhe1, setDetalhe1] = React.useState();
  const [detalhe2, setDetalhe2] = React.useState();
  const [atual, setAtual] = React.useState();
  const firstLiRef = React.useRef(null);

  React.useMemo(() => {
    localStorage.setItem("header", "#inicio");
  }, []);

  React.useEffect(() => {
    const pageAtual = window.location.href;
    if (pageAtual.includes("dia")) {
      setModo("dia");
      setAstro(sol);
      setDetalhe1(nuvem1);
      setDetalhe2(nuvem2);
    } else {
      setModo("");
      setAstro(lua);
      setDetalhe1(estrelas);
      setDetalhe2(estrelinhas);
    }
    const firstLi = document.querySelector("li");
    const firstLiRect = firstLi.getBoundingClientRect();
    setNavePos({
      top: firstLiRect.top - 50,
      left: firstLiRect.left + firstLiRect.width / 2,
    });
    setAtual(localStorage.getItem("header"));
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const selecionado = document.querySelector(`[href="${atual}"]`);
      if (selecionado) {
        selecionado.classList.add("ativo");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [atual]);

  const handleLiClick = (e) => {
    const lis = document.querySelectorAll(".menu-nav");
    lis.forEach((li) => {
      li.classList.remove("ativo");
    });
    const li = e.target;
    localStorage.setItem("header", li.getAttribute("href"));
    setAtual(li.getAttribute("href"));
    li.classList.add("ativo");
    const liRect = li.getBoundingClientRect();
    setNavePos({
      top: liRect.top - 50,
      left: liRect.left + liRect.width / 2,
    });
  };

  const [mostrarMenu, setMostrarMenu] = React.useState(true);
  React.useEffect(() => {
    let ultimaPosicao = 0;
    function scrollando() {
      const posicaoAtual = window.scrollY;
      if (ultimaPosicao > posicaoAtual) {
        setMostrarMenu(true);
      } else {
        setMostrarMenu(false);
      }
      ultimaPosicao = posicaoAtual;
    }
    document.addEventListener("scroll", scrollando);
  }, []);

  return (
    <>
      {mostrarMenu && (
        <HeaderComponent className={modo}>
          <HeaderLua src={astro} alt="astro" />
          <HeaderEstrelas src={detalhe1} alt="detalhe1" />
          <HeaderEstrelinhas src={detalhe2} alt="detalhe2" />
          <HeaderLista className="Header">
            <li>
              <a
                className="menu-nav"
                ref={firstLiRef}
                onClick={handleLiClick}
                href="#inicio"
              >
                Início
              </a>
            </li>
            <li>
              <a className="menu-nav" onClick={handleLiClick} href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="menu-nav" onClick={handleLiClick} href="#portfolio">
                Portfólio
              </a>
            </li>
            <li>
              <a className="menu-nav" onClick={handleLiClick} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-nav" onClick={handleLiClick} href="#contato">
                Contato
              </a>
            </li>
            <HeaderNave style={navePos}>
              <HeaderNaveLuz />
            </HeaderNave>
          </HeaderLista>
        </HeaderComponent>
      )}
    </>
  );
};

export default Header;
