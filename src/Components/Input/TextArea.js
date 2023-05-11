import React from "react";
import { LabelInput, InputContainer, TextAreaComponent } from "./InputStyles";

const TextArea = ({
  htmlFor,
  texto,
  nome,
  id,
  placeholder,
  setDados,
  dados,
  cols,
  rows,
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
          <TextAreaComponent
            name={nome}
            id={id}
            placeholder={placeholder}
            cols={cols}
            rows={rows}
            required
            onFocus={inputFocado}
            onBlur={inputDesfocado}
            onChange={atualizar}
            value={dados}
            className={modo}
          />
          <LabelInput className={focus + " " + modo} htmlFor={htmlFor}>
            {texto}
          </LabelInput>
        </InputContainer>
      </>
    </>
  );
};

export default TextArea;
