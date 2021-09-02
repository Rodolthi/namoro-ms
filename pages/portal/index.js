import React from "react";
import styled from "styled-components";
import Login from "./login";
import Inicio from "./inicio";
import Cabecalho from "./cabecalho";
import Planos from "./planos";
import FormularioParaAnuncio from "./formulario-para-anuncio";
import { useRouter } from "next/router";

const Portal = () => {
  const router = useRouter()

  return (
    <>
      <Page>
        <Cabecalho></Cabecalho>

        <Inicio />
        <Planos></Planos>
        <FormularioParaAnuncio></FormularioParaAnuncio>
      </Page>
    </>
  );
};

export default Portal

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
