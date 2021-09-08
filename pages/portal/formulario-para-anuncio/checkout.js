import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { obterDadosDoFormulario, salvarDadosDoFormulario } from "utils/storage";

const Checkout = () => {
  const { register, getValues, formState: { errors }, handleSubmit } = useForm();
  const [deposito, setDeposito] = useState(false)

  const finalizarCadastro = () => {
    salvarDadosDoFormulario("checkout", getValues())
    const formularios = ["dadosPessoais", "descricaoDoAnuncio", "imagensDaGaleria", "imagemPrincipal", "checkout"]

    const dados = obterDadosDoFormulario(formularios)
    console.log(dados)
  }

  return (
    <Formulario noValidate autoComplete="off" onSubmit={handleSubmit(finalizarCadastro)} >
      <Titulo>Pagamento</Titulo>
      <FormControl fullWidth component="fieldset">
        <FormGroup row style={{ color: "white" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={deposito}
                color="primary"
                {...register("deposito")}
                onChange={(e) => setDeposito(!deposito)}
              />
            }
            label="Deseja fazer o pagamento por depósito"
          />
        </FormGroup>
      </FormControl>

      {!deposito &&
        <div>Fazer pagamento </div>
      }

      <Button color="primary" type="submit">Próxima</Button>
    </Formulario>
  );
};

export default Checkout

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
