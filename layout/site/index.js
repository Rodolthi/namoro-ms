import Loading from "components/loading"
import React from "react"
import styled from "styled-components"
import ListaDeAnuncios from "./lista-de-anuncio"

const SiteNamoros = () => {
  return (
    <Site>
      <Loading />
      <ListaDeAnuncios />
    </Site>
  )
}

export default SiteNamoros

const Site = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
