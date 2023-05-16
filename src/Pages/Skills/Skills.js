import React from "react";
import {
  SkillsComponent,
  SkillsDivisoria,
  SkillsGrade,
  SkillsImagemDetalhe,
} from "./SkillsStyles";
import { Divisoria, TituloGeral } from "../../GlobalStyles";
import Api from "../../Api";
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

  const [detalhe, setDetalhe] = React.useState();
  const [detalheMaior, setDetalheMaior] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();
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
          next: response.data[2][1],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    Api.get("/imagens/adereco-desktop")
      .then((response) => {
        const pageAtual = window.location.href;
        if (pageAtual.includes("dia")) {
          setDetalheMaior(response.data[4][1]);
        } else {
          setDetalheMaior(response.data[5][1]);
        }
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
      <SkillsComponent id="skills" className="sessao">
        <TituloGeral className={modo}>Skills</TituloGeral>
        <SkillsDivisoria>
          <SkillsGrade>
            {tecs &&
              nomes.map((tec) => (
                <li key={tec} className={tec}>
                  <img src={tecs[tec]} alt={tec} />
                </li>
              ))}
          </SkillsGrade>
          <SkillsImagemDetalhe src={detalheMaior} alt="imagemDetalheGrande" />
        </SkillsDivisoria>
      </SkillsComponent>
      )
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Skills;
