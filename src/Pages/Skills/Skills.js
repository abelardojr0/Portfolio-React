import React from "react";
import { SkillsComponent, SkillsGrade } from "./SkillsStyles";
import { Divisoria, TituloGeral } from "../../GlobalStyles";

import react from "../../Image/tecnologias/react.png";
import js from "../../Image/tecnologias/js.png";
import html from "../../Image/tecnologias/html.png";
import css from "../../Image/tecnologias/css.png";
import sass from "../../Image/tecnologias/sass.png";
import git from "../../Image/tecnologias/git.png";
import node from "../../Image/tecnologias/node.png";
import postgreSQL from "../../Image/tecnologias/postgreSQL.png";
import mysql from "../../Image/tecnologias/mysql.png";
import styled_components from "../../Image/tecnologias/styled-components.png";
import typescript from "../../Image/tecnologias/typescript.png";
import flask from "../../Image/tecnologias/flask.png";
import python from "../../Image/tecnologias/python.png";
import next from "../../Image/tecnologias/next.png";
import bootstrap from "../../Image/tecnologias/bootstrap.png";
import mongoDB from "../../Image/tecnologias/mongoDB.png";
import detalhe1 from "../../Image/adereços/divisoria-externa-noite.png";
import detalhe2 from "../../Image/adereços/divisoria-externa-dia.png";
const Skills = () => {
  const nomes = [
    "react",
    "next",
    "styled_components",
    "typescript",
    "js",
    "html",
    "css",
    "sass",
    "bootstrap",
    "node",
    "flask",
    "python",
    "postgreSQL",
    "mysql",
    "mongoDB",
    "git",
  ];

  const tecs = {
    react,
    js,
    html,
    css,
    sass,
    git,
    node,
    postgreSQL,
    mysql,
    styled_components,
    typescript,
    flask,
    python,
    next,
    mongoDB,
    bootstrap,
  };
  const [detalhe, setDetalhe] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();

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

  return (
    <>
      <SkillsComponent id="skills" className="sessao">
        <TituloGeral className={modo}>Skills</TituloGeral>
        <SkillsGrade>
          {nomes.map((tec) => (
            <li className={tec}>
              <img src={tecs[tec]} alt={tec} />
            </li>
          ))}
        </SkillsGrade>
      </SkillsComponent>
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Skills;
