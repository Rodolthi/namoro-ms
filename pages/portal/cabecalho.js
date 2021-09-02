import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Icone from "../../components/icone";

const Cabecalho = () => {
  return (
    <CabecalhoDoPortal>
      <LogoDoCabecalho href="/portal/inicio/">
        <Logo src="/logo.svg" />
      </LogoDoCabecalho>

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
  background-color: #000;
`;

const LogoDoCabecalho = styled(Link)`
  height: 100%;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

const Logo = styled.img`
  height: 100%;
`