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
    "reactJS",
    "nextJS",
    "styled_components",
    "typescript",
    "js",
    "html",
    "css",
    "sass",
    "bootstrap",
    "nodeJS",
    "python",
    "flask",
    "postgreSQL",
    "mongoDB",
    "mysql",
    "git",
  ];

  const [detalhe, setDetalhe] = React.useState();
  const [detalheMaior, setDetalheMaior] = React.useState();
  const [detalheNome, setDetalheNome] = React.useState();
  const [modo, setModo] = React.useState();
  const [tecs, setTecs] = React.useState();

  React.useEffect(() => {
    Api.get("/tec")
      .then((response) => {
        setTecs({
          reactJS: response.data[0][1].replace("$", "?"),
          nextJS: response.data[1][1].replace("$", "?"),
          typescript: response.data[2][1].replace("$", "?"),
          styled_components: response.data[3][1].replace("$", "?"),
          js: response.data[4][1].replace("$", "?"),
          html: response.data[5][1].replace("$", "?"),
          css: response.data[6][1].replace("$", "?"),
          sass: response.data[7][1].replace("$", "?"),
          bootstrap: response.data[8][1].replace("$", "?"),
          nodeJS: response.data[9][1].replace("$", "?"),
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
      Api.get("/corpo")
        .then((response) => {
          const pageAtual = window.location.href;
          if (pageAtual.includes("dia")) {
            setDetalheMaior(response.data[10][1].replace("$", "?"));
          } else {
            setDetalheMaior(response.data[11][1].replace("$", "?"));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      <Divisoria>
        <hr className={modo} />
        <img className={detalheNome} src={detalhe} alt="imagem" />
      </Divisoria>
    </>
  );
};

export default Skills;
