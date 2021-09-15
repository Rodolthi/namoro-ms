import React from "react";
import styled from "styled-components";
import Icone from "components/icone";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

const rotasDoPortal = ["/portal/inicio", "/portal/planos", "/portal/formulario"];

const Cabecalho = () => {
  const router = useRouter();
  const estaNasRotasDoPortal = rotasDoPortal.some(rota => router.pathname === rota)
  const deslogar = () => {
    router.push("/portal/login");
  };

  return (
    <CabecalhoDoPortal>
      <Logo src="/logo.svg" />

      {estaNasRotasDoPortal && (
        <ContainerUsuario>
          {/* <Usuario>
            <Icone nome="account_circle" />
            Thiago Menezes
          </Usuario> */}
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
