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
import MenuHamburguer from "./MenuHamburguer";
import Toggle from "../Toggle/Toggle";
import Api from "../../Api";
const Header = () => {
  const [navePos, setNavePos] = React.useState({
    top: 0,
    left: 0,
  });
  const [modo, setModo] = React.useState();
  const [astro, setAstro] = React.useState();
  const [detalhe1, setDetalhe1] = React.useState();
  const [detalhe2, setDetalhe2] = React.useState();
  const [atual, setAtual] = React.useState();
  const firstLiRef = React.useRef(null);
  const [menuMobile, setMenuMobile] = React.useState(false);
  const [mostrarMenu, setMostrarMenu] = React.useState(true);

  React.useMemo(() => {
    localStorage.setItem("header", "#inicio");
  }, []);

  React.useEffect(() => {
    Api.get("/header")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          setModo("dia");
          setAstro(response.data[1][1].replace("$", "?"));
          setDetalhe1(response.data[3][1].replace("$", "?"));
          setDetalhe2(response.data[4][1].replace("$", "?"));
        } else {
          setModo("");
          setAstro(response.data[2][1].replace("$", "?"));
          setDetalhe1(response.data[5][1].replace("$", "?"));
          setDetalhe2(response.data[6][1].replace("$", "?"));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    const firstLi = document.querySelector("li");
    const firstLiRect = firstLi.getBoundingClientRect();
    setNavePos({
      top: firstLiRect.top - 50,
      left: firstLiRect.left + firstLiRect.width / 2 ,
    });
    setAtual(localStorage.getItem("header"));
    const selecionado = document.querySelector(
      `[href="${localStorage.getItem("header")}"]`
    );
    if (selecionado) {
      selecionado.classList.add("ativo");
    }
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

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setMenuMobile(true);
    }
  }, []);

  return (
    <>
      {mostrarMenu && (
        <>
          <HeaderComponent className={modo}>
            <HeaderLua src={astro} alt="astro" />
            <HeaderEstrelas src={detalhe1} alt="detalhe1" />
            <HeaderEstrelinhas src={detalhe2} alt="detalhe2" />
            {menuMobile ? (
              <MenuHamburguer />
            ) : (
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
                  <a
                    className="menu-nav"
                    onClick={handleLiClick}
                    href="#resumo"
                  >
                    Resumo
                  </a>
                </li>
                <li>
                  <a
                    className="menu-nav"
                    onClick={handleLiClick}
                    href="#portfolio"
                  >
                    Portfólio
                  </a>
                </li>
                <li>
                  <a
                    className="menu-nav"
                    onClick={handleLiClick}
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="menu-nav"
                    onClick={handleLiClick}
                    href="#contato"
                  >
                    Contato
                  </a>
                </li>
                <HeaderNave style={navePos}>
                  <HeaderNaveLuz />
                </HeaderNave>
              </HeaderLista>
            )}
            <Toggle />
          </HeaderComponent>
        </>
      )}
    </>
  );
};

export default Header;
