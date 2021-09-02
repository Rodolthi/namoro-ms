import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import maximoDeCaracteres from "./maximo-de-caracteres";

const InformacoesDoAnuncio = () => {
  return (
    <Formulario noValidate autoComplete="off">
      <Titulo>Informações do anúncio</Titulo>
      <TextField
        label="Título do anúncio"
        variant="outlined"
        fullWidth
        id="titulo"
        type="text"
        onInput={(e) => {
          e.target.value = maximoDeCaracteres(e.target.value, 120);
        }}
      />
      <TextField
        label="Descrição do anúncio"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        id="texto-descritivo"
      />
    </Formulario>
  );
};

export default InformacoesDoAnuncio;

const Formulario = styled.form`
  background: #000;
  width: 100%;
  .MuiTextField-root,
  .MuiFormControl-root {
    margin-bottom: 16px;
  }
`;

const Titulo = styled.h2`
  font-size: 24px;
  color: white;
`;
