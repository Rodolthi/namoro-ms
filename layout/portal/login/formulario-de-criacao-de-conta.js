import React from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import Icone from "components/icone";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import lerURI from "utils/lerURI";
import { useForm } from "react-hook-form";
import {postUsuario} from 'api/controllers/criacao-conta';

const FormularioDeCriacaoDeConta = ({ irParaLogin }) => {
  const criarConta = async (e) => {
    const form = new FormData();
    form.append('nome', e.usuario);
    form.append('email', e.novoEmail);
    form.append('senha', e.senha);
    form.append('documentoFrente', documentoFrente[0].files);
    form.append('documentoVerso', documentoVerso[0].files);
    form.append('perfilComDocumento', perfilComDocumento[0].files);
    const data = await postUsuario(form);
  }
  
  const [novaSenha, setNovaSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");
  const [senhasIguais, setSenhasIguais] = useState(true)
  const [senhaForte, setSenhaForte] = useState(true)
  const [ehMaiorDeIdade, setEhMaiorDeIdade] = useState(false);
  const [documentoFrente, setDocumentoFrente] = useState();
  const [documentoVerso, setDocumentoVerso] = useState();
  const [perfilComDocumento, setPerfilComDocumento] = useState();
  const regexParaEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexParaSenhaForte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  const formularioValido = () => ehMaiorDeIdade && documentoFrente && perfilComDocumento && perfilComDocumento;

  const { register, getValues, formState: { errors }, handleSubmit } = useForm();

  const handleIdade = (event) => {
    setEhMaiorDeIdade(!ehMaiorDeIdade);
  };

  const handleDocumentoFrente = (e) => {
    lerURI(e).then((imagem) => {
      setDocumentoFrente(imagem);      
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

  const compararSenhas = (valor) => {
    setSenhaRepetida(valor)
    
    if (novaSenha !== senhaRepetida) {
      setSenhasIguais(false)
    } else setSenhasIguais(true)

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
        {...register("novaSenha", { 
          required: "A nova senha é obrigatória", 
          pattern: { value: regexParaSenhaForte, message: "Insira uma senha com os requisitos" }
        })}
        onChange={(e) => {
          setNovaSenha(e.target.value)
          setSenhaForte(regexParaSenhaForte.test(e.target.value))
        }}
        helperText={errors.novaSenha?.message || !senhaForte && "Insira uma senha com os requisitos"}
        error={errors.novaSenha?.type === "required" || !senhaForte}
      />

      <ContainerRequisitos className={senhaForte && "sucesso"}>
        <p><strong>A senha deve conter:</strong></p>
        <p>No mínimo <strong>1 número</strong></p>
        <p>No mínimo <strong>1 letra minúscula</strong></p>
        <p>No mínimo <strong>1 letra maiúscula</strong></p>
        <p>No mínimo <strong>1 caractere especial</strong></p>
        <p>No mínimo <strong>8 caracteres</strong></p>
      </ContainerRequisitos>

      <TextField
        fullWidth
        type="password"
        label="Repita sua senha"
        variant="outlined"
        {...register("novaSenhaRepetida", { required: "Repita a senha" })}
        helperText={errors.novaSenhaRepetida?.message || !senhasIguais && "As senhas devem ser iguais" }
        error={errors.novaSenhaRepetida?.type === "required"|| !senhasIguais}
        onBlur={(e) => compararSenhas(e.target.value)}
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
        {documentoFrente && <ImagemDocumento src={documentoFrente[0].result} />}

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
        {documentoVerso && <ImagemDocumento src={documentoVerso[0].result} />}

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
        {perfilComDocumento && <ImagemDocumento src={perfilComDocumento[0].result} />}
      </Documentos>

      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            style={{ color: "white" }}
            control={
              <Checkbox
                checked={ehMaiorDeIdade}
                name="maiorDeIdade"
                color="primary"
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
  height: auto;
  width: 80%;
  object-fit: cover;
  margin: 0 auto;
`;

const Documentos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  * {
    color: var(--branca);
  }
  label {
    margin-top: 16px;
    padding: 24px;
    border: 2px solid var(--primaria);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    color: var(--primaria);
    outline: 0;
    margin-bottom: 8px;
    &:focus,
    &:hover {
      opacity: 0.8;
    }
    .material-icons-round {
      margin-bottom: 8px;
      color: var(--primaria);
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

const ContainerRequisitos = styled.div`
  color: white;
  opacity: 0.7;
  margin-bottom: 16px;
  p {
    margin: 0;
  }
  & .sucesso {
    color: var(--sucesso)
  }
`