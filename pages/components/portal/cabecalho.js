import React from "react";
import styled from "styled-components";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import Icone from "../icone";

const Cabecalho = () => {
  return (
    <CabecalhoDoPortal>
      <LogoDoCabecalho link="/portal/inicio/">
        <img className="logo" src={Logo} />
      </LogoDoCabecalho>

      <Icone nome="account_circle" />
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
  background-color: #000;
`;

const LogoDoCabecalho = styled(Link)`
  height: 100%;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
  img {
    height: 100%;
  }
`;
