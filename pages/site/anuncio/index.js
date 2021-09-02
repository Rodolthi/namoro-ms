import React from "react"
import styled from "styled-components"
import Galeria from "./galeria"
import Ficha from "./ficha"
import Descricao from "./descricao"

const Anuncio = () => {
  return (
    <ContainerAnuncio>
      <Ficha />
      <Conteudo>
        <Galeria />
        <Descricao />
      </Conteudo>
    </ContainerAnuncio>
  )
}

export default Anuncio

const ContainerAnuncio = styled.section`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 24px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    max-width: auto;
  }
`

const Conteudo = styled.div`
  width: 100%;
`
