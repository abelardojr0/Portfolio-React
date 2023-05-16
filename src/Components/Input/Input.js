import React from "react";
import { LabelInput, InputComponent, InputContainer } from "./InputStyles";

const Input = ({
  htmlFor,
  texto,
  tipo,
  nome,
  id,
  placeholder,
  setDados,
  dados,
  modo,
}) => {
  const [focus, setFocus] = React.useState("");
  function inputFocado() {
    setFocus("ativo");
  }
  function inputDesfocado(e) {
    if (e.target.value.length > 0) {
      return;
    } else {
      setFocus("");
    }
  }
  function atualizar(e) {
    setDados(e.target.value);
  }
  return (
    <>
      <>
        <InputContainer>
          <InputComponent
            type={tipo}
            name={nome}
            id={id}
            placeholder={placeholder}
            required
            onFocus={inputFocado}
            onBlur={inputDesfocado}
            onChange={atualizar}
            value={dados}
            className={modo}
            autoComplete="off"
          />
          <LabelInput className={focus + " " + modo} htmlFor={htmlFor}>
            {texto}
          </LabelInput>
        </InputContainer>
      </>
    </>
  );
};

export default Input;
