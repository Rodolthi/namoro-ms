import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { salvarDadosDoFormulario } from "utils/storage";

const InformacoesDoAnuncio = () => {
  const { register, getValues, formState: { errors }, handleSubmit } = useForm();

  const proximaEtapa = () => {
    salvarDadosDoFormulario("descricaoDoAnuncio", getValues())
  }

  return (
    <Formulario noValidate autoComplete="off" onSubmit={handleSubmit(proximaEtapa)} >
      <Titulo>Descrição do anúncio</Titulo>
      <TextField
        {...register("descricao", { required: "É obrigatório inserir a descrição" })}
        label="Descrição do anúncio"
        multiline
        error={errors?.descricao}
        helperText={errors?.message}
        rows={4}
        variant="outlined"
        fullWidth
        id="texto-descritivo"
      />

      <Button color="primary" type="submit">Próxima</Button>
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
  color: var(--branca);
`;
