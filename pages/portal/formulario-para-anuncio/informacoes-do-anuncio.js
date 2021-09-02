import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import maximoDeCaracteres from "./maximo-de-caracteres";

const InformacoesDoAnuncio = () => {
  return (
    <Formulario noValidate autoComplete="off">
      <Titulo>Descrição do anúncio</Titulo>
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

export default InformacoesDoAnuncio

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
