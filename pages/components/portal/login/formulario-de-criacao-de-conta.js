import React from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import Icone from "../../icone";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

const FormularioDeCriacaoDeConta = ({ irParaLogin }) => {
  const criarConta = () => alert("Criando");
  const [ehMaiorDeIdade, setEhMaiorDeIdade] = useState(false);

  const handleChange = (event) => {
    setEhMaiorDeIdade(!ehMaiorDeIdade);
  };

  return (
    <Formulario noValidate autoComplete="off">
      <Title>Crie uma nova conta</Title>

      <TextField
        fullWidth
        id="nome"
        type="text"
        label="Nome completo"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="novo-email"
        type="email"
        label="E-mail para acessar o portal"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="nova-senha"
        type="password"
        label="Senha"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="nova-senha-repetida"
        type="password"
        label="Repita sua senha"
        variant="outlined"
      />

      <Documentos>
        <label tabIndex="0" htmlFor="documento-frente">
          <Icone nome="assignment_ind" />
          Inserir RG/CNH frente
        </label>
        <input
          type="file"
          id="documento-frente"
          name="documento-frente"
          accept="image/png, image/jpeg"
        />

        <label tabIndex="0" htmlFor="documento-verso">
          <Icone nome="assignment_turned_in" />
          Inserir RG/CNH Verso
        </label>
        <input
          type="file"
          id="documento-verso"
          name="documento-verso"
          accept="image/png, image/jpeg"
        />

        <label tabIndex="0" htmlFor="foto-do-rosto">
          <Icone nome="person" />
          Inserir foto com RG/CNH na mão e mostrando o rosto
        </label>
        <p>Precisamos comprovar que é você mesmo e maior de idade</p>
        <input
          type="file"
          id="foto-do-rosto"
          name="foto-do-rosto"
          accept="image/png, image/jpeg"
        />
      </Documentos>

      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            style={{ color: "white" }}
            control={
              <Checkbox
                checked={ehMaiorDeIdade}
                name="maiorDeIdade"
                onChange={handleChange}
              />
            }
            label="Declaro que tenho mais de 18 anos"
          />
        </FormGroup>
      </FormControl>

      <BotaoDeCriarUsuario
        color="primary"
        variant="contained"
        type="button"
        size="large"
        startIcon={<Icone nome="person_add" />}
        onClick={criarConta}
        disabled={!ehMaiorDeIdade}
      >
        Registrar
      </BotaoDeCriarUsuario>
      <Button
        color="default"
        type="button"
        onClick={irParaLogin}
        startIcon={<Icone nome="keyboard_backspace" />}
      >
        Voltar para login
      </Button>
    </Formulario>
  );
};

export default FormularioDeCriacaoDeConta;

const Title = styled.h1`
  color: #ddd;
  font-weight: 500;
  font-size: 24px;
`;

const Formulario = styled.form`
  width: 100%;
  .MuiTextField-root {
    margin-bottom: 24px;
  }
`;

const BotaoDeCriarUsuario = styled(Button)`
  width: 100%;
  margin-bottom: 24px !important;
`;

const Documentos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  * {
    color: white;
  }
  label {
    margin-top: 16px;
    padding: 24px;
    border: 2px solid #fac045;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    color: #fac045;
    outline: 0;
    margin-bottom: 8px;
    &:focus,
    &:hover {
      opacity: 0.8;
    }
    .material-icons-round {
      margin-bottom: 8px;
      color: #fac045;
    }
  }
  input {
    display: none;
  }
  p {
    margin: 0;
    font-size: 13px;
    opacity: 0.6;
  }
`;
