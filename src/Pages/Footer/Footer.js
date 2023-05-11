import React from "react";
import { FooterComponent, FooterSubTitulo, FooterTitulo } from "./FooterStyles";

const Footer = () => {
  const [modo, setModo] = React.useState();

  React.useEffect(() => {
    const pageAtual = window.location.href;
    if (pageAtual.includes("dia")) {
      setModo("dia");
    } else {
      setModo("");
    }
  }, []);
  return (
    <FooterComponent className={modo}>
      <FooterTitulo className={modo}>
        Portfólio - Abelardo Júnior ©
      </FooterTitulo>
      <FooterSubTitulo className={modo}>
        Alguns direitos reservados
      </FooterSubTitulo>
    </FooterComponent>
  );
};

export default Footer;
