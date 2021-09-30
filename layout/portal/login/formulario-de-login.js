import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import Icone from "components/icone";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {autenticar} from 'api/controllers/autenticar';
import {initializeStore} from 'store/configureStore';
import { useLocalStorage } from "utils/useLocalStorage";

const FormularioDeLogin = ({ irParaCriacaoDeConta, state }) => {

  const [,setNomeUsuario] = useLocalStorage("nomeUsuario", '');
  const [,setToken] = useLocalStorage("token", '');
  const [,setUsuarioId] = useLocalStorage("usuarioId", '');

  const regexParaEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const router = useRouter();
  const reduxStore = initializeStore();
  const {dispatch} = reduxStore;

  const logar = async (user) => {

    const {data, status} = await autenticar({"username":user.email, "password":user.senha})
    console.log(data);
    if(status === 200) {
      dispatch({
        type: 'token',
        token: data.data.token
      })
      dispatch({
        type: 'nomeUsuario',
        nomeUsuario: data.data.displayName
      })
      setNomeUsuario(data.data.displayName);
      setToken(data.data.token);
      setUsuarioId(data.data.email);
      router.push("/portal/inicio");
    }
  };

  const { register, formState: { errors }, handleSubmit } = useForm();

  useEffect(() => {
    document.getElementById("email").focus();
  }, [errors]);


  return (
    <Formulario noValidate autoComplete="off" onSubmit={handleSubmit(logar)}>
      <Title>Entre na sua conta</Title>
      <TextField
        {...register("email",
          {
            required: "O e-mail é obrigatório",
            pattern: { value: regexParaEmail, message: "Insira um e-mail válido" },
          })}
        helperText={errors.email?.type === "required" && errors.email?.message || errors.email?.type === "pattern" && errors.email?.message}
        error={errors.email?.type === "pattern" || errors.email?.type === "required"}
        fullWidth
        id="email"
        type="email"
        label="E-mail"
        variant="outlined"
      />
      <TextField
        {...register("senha", { required: "A senha é obrigatória" })}
        helperText={errors.senha?.message}
        error={errors.senha?.type === "required"}
        fullWidth
        id="password"
        type="password"
        label="Senha"
        variant="outlined"
      />
      <BotaoParaLogar
        color="primary"
        size="large"
        variant="contained"
        type="submit"
        startIcon={<Icone nome="login" />}
      >
        Entrar
      </BotaoParaLogar>
      <Footer>
        <Button
          color="default"
          type="button"
          startIcon={<Icone nome="person_add" />}
          onClick={irParaCriacaoDeConta}
        >
          Criar nova conta
        </Button>
      </Footer>
    </Formulario>
  );
};

export default FormularioDeLogin

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 24px;
  margin-top: 24px;
  border-top: 2px solid #222;
`;

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

const BotaoParaLogar = styled(Button)`
  width: 100%;
  font-weight: 700;
  letter-spacing: 0px;
`;

// const BotaoDoGmail = styled(GoogleLogin)`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   font-size: 16px !important;
//   font-family: proxima-nova !important;
//   font-weight: 600;
//   margin-top: 24px;
//   border-radius: 4px !important;
// `;
