import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import { useState } from "react";
import Logo from "../../../public/logo.svg";
import FormularioDeLogin from "./formulario-de-login";
import FormularioDeCriacaoDeConta from "./formulario-de-criacao-de-conta";

const Login = () => {
  const [loginAtivado, setloginAtivado] = useState(true);
  const alternarEntreLoginECriacaoDeConta = () => {
    setloginAtivado(!loginAtivado);
  };

  return (
    <ContainerLogin>
      <img src={Logo} style={{ width: 240, marginBottom: 16 }} />
      <Switch>
        <Route path={loginAtivado}>
          <FormularioDeLogin
            irParaCriacaoDeConta={alternarEntreLoginECriacaoDeConta}
          />
        </Route>

        <Route path={!loginAtivado}>
          <FormularioDeCriacaoDeConta
            irParaLogin={alternarEntreLoginECriacaoDeConta}
          />
        </Route>
      </Switch>
    </ContainerLogin>
  );
};

export default Login;

const ContainerLogin = styled.section`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #000;
  border-radius: 8px;
  margin: 48px auto;
  width: 100%;
  max-width: 480px;
`;
