import React from "react";
import styled from "styled-components";
import Cabecalho from "./cabecalho";
import ListaDeAnuncios from "./lista-de-anuncios";
import Rodape from "./rodape";
import ModalDeSelecaoDeAcompanhante from "./modal-de-selecao-de-acompanhante";

const SiteNamoros = () => {
  return (
    <Site>
      <Cabecalho />
      <ModalDeSelecaoDeAcompanhante />
      <ListaDeAnuncios />
      <Rodape />
    </Site>
  );
};

export default SiteNamoros;

const Site = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
