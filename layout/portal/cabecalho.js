import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icone from "components/icone";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import {useLocalStorage} from 'utils/useLocalStorage';

const rotasDoPortal = ["/portal/inicio", "/portal/planos", "/portal/formulario"];

const Cabecalho = () => {
  const router = useRouter();
  const [usuarioState, setUsuarioState] = useLocalStorage('nomeUsuario');
  const [usuarioLogado, setUsuarioLogado] = useState('');    
  const estaNasRotasDoPortal = rotasDoPortal.some(rota => router.pathname === rota);
  const {nomeUsuario} = useSelector((state) => state);
  
  const deslogar = () => {
    router.push("/portal/login");
  };

  useEffect(() => {
      estaNasRotasDoPortal && !nomeUsuario ? setUsuarioLogado(usuarioState) : setUsuarioState(nomeUsuario);
  },[nomeUsuario]);

  return (
    <CabecalhoDoPortal>
      <Logo src="/logo.svg" />
      {estaNasRotasDoPortal && (
        <ContainerUsuario>
          <Usuario>
            <Icone nome="account_circle" />
            {usuarioLogado || usuarioState}
          </Usuario>
          <Button onClick={deslogar} type="button">
            <Icone nome="logout" />
          </Button>
        </ContainerUsuario>
      )}
    </CabecalhoDoPortal>
  );
};

export default Cabecalho;

const CabecalhoDoPortal = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 16px;
  background-color: var(--preta);
  .MuiButton-root {
    margin-left: 16px;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const ContainerUsuario = styled.div`
  display: flex;
  justify-content: center;
  color: var(--branca);
`;

const Usuario = styled.p`
  color: var(--branca);
  font-size: 16px;
  display: flex;
  margin: 0;
  height: 100%;
  align-items: center;
  .material-icons-round {
    margin-right: 8px;
  }
`;
