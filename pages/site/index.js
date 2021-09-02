import React from "react"
import styled from "styled-components"
import Cabecalho from "./cabecalho"
import ListaDeAnuncios from "./lista-de-anuncio"
import Rodape from "./rodape"

const SiteNamoros = () => {
  return (
    <Site>
      <Cabecalho />
      <ListaDeAnuncios />
      <Rodape />
    </Site>
  )
}

export default SiteNamoros

const Site = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
