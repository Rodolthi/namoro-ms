import React from "react";
import styled from "styled-components";
import Icone from "components/icone";
import { useRouter } from "next/router";

const Cabecalho = () => {
  const router = useRouter()

  return (
    <CabecalhoDoPortal>
      <Logo src="/logo.svg" />

      <Icone nome="account_circle" />
    </CabecalhoDoPortal>
  );
};

export default Cabecalho

const CabecalhoDoPortal = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 16px;
  background-color: var(--preta);
`;

const Logo = styled.img`
  height: 100%;
`