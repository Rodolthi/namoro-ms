import React from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import Icone from "../../../components/icone";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import lerURI from "../formulario-para-anuncio/lerURI";
import { useForm } from "react-hook-form";

const FormularioDeCriacaoDeConta = ({ irParaLogin }) => {
  const criarConta = () => alert("Criando");
  const [ehMaiorDeIdade, setEhMaiorDeIdade] = useState(false);
  const [documentoFrente, setDocumentoFrente] = useState()
  const [documentoVerso, setDocumentoVerso] = useState()
  const [perfilComDocumento, setPerfilComDocumento] = useState()
  const regexParaEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const formularioValido = () => ehMaiorDeIdade && documentoFrente && perfilComDocumento && perfilComDocumento;

  const { register, getValues, formState: { errors }, handleSubmit } = useForm();

  const handleIdade = (event) => {
    setEhMaiorDeIdade(!ehMaiorDeIdade);
  };

  const handleDocumentoFrente = (e) => {
    lerURI(e).then((imagem) => {
      setDocumentoFrente(imagem)
    })
  }

  const handleDocumentoVerso = (e) => {
    lerURI(e).then((imagem) => {
      setDocumentoVerso(imagem)
    })
  }

  const handlePerfilComDocumento = (e) => {
    lerURI(e).then((imagem) => {
      setPerfilComDocumento(imagem)
    })
  }



  return (
    <Formulario noValidate autoComplete="off" onSubmit={handleSubmit(criarConta)}>
      <Title>Crie uma nova conta</Title>

      <TextField
        fullWidth
        type="text"
        label="Seu nome completo"
        variant="outlined"
        {...register("usuario", { required: "O nome é obrigatório" })}
        helperText={errors.usuario?.message}
        error={errors.usuario?.type === "required"}
      />

      {/* TODO: Validar se o e-mail já existe */}
      <TextField
        {...register("novoEmail",
          {
            required: "O e-mail é obrigatório",
            pattern: { value: regexParaEmail, message: "Insira um e-mail válido" },
          })}
        helperText={errors.novoEmail?.type === "required" && errors.novoEmail?.message || errors.novoEmail?.type === "pattern" && errors.novoEmail?.message}
        error={errors.novoEmail?.type === "pattern" || errors.novoEmail?.type === "required"}
        fullWidth
        type="email"
        label="E-mail"
        variant="outlined"
      />

      <TextField
        fullWidth
        type="password"
        label="Senha"
        variant="outlined"
        {...register("novaSenha", { required: "A nova senha é obrigatória" })}
        helperText={errors.novaSenha?.message}
        error={errors.novaSenha?.type === "required"}
      />

      <TextField
        fullWidth
        type="password"
        label="Repita sua senha"
        variant="outlined"
        {...register("novaSenhaRepetida", { required: "Repita a senha" })}
        helperText={errors.novaSenhaRepetida?.message}
        error={errors.novaSenhaRepetida?.type === "required"}
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
          onChange={(e) => handleDocumentoFrente(e)} />
        {documentoFrente && <ImagemDocumento src={documentoFrente} />}

        <label tabIndex="0" htmlFor="documento-verso">
          <Icone nome="assignment_turned_in" />
          Inserir RG/CNH Verso
        </label>
        <input
          type="file"
          id="documento-verso"
          name="documento-verso"
          accept="image/png, image/jpeg"
          onChange={(e) => handleDocumentoVerso(e)}
        />
        {documentoVerso && <ImagemDocumento src={documentoVerso} />}

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
          onChange={(e) => handlePerfilComDocumento(e)}
        />
        {perfilComDocumento && <ImagemDocumento src={perfilComDocumento} />}
      </Documentos>

      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            style={{ color: "white" }}
            control={
              <Checkbox
                checked={ehMaiorDeIdade}
                name="maiorDeIdade"
                onChange={handleIdade}
              />
            }
            label="Declaro que tenho mais de 18 anos"
          />
        </FormGroup>
      </FormControl>

      <BotaoDeCriarUsuario
        color="primary"
        variant="contained"
        type="submit"
        size="large"
        startIcon={<Icone nome="person_add" />}
        disabled={!formularioValido()}
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
    </Formulario >
  );
};

export default FormularioDeCriacaoDeConta

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

const ImagemDocumento = styled.img`
  height: 400px;
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
