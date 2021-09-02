import React from "react"
import styled from "styled-components"
import Telefone from "./telefone"

const telefone = "(67) 99999-8383"
const descricaoDoAnuncio = "Descrição completa do anúncio aqui nessa.  completa do anúncio aqui nessa. página. Descrição completa do anúncio aqui nessa página. Descrição completa do anúncio aqui nessa página.Descrição completa do anúncio aqui nessa página."

const Descricao = () => {
  return (
    <ContainerDescricao>
      <Texto>
        {descricaoDoAnuncio}
      </Texto>

      <Contato>
        <Telefone numero={telefone} />
        <Detalhes>Com local</Detalhes>
        <Detalhes>Campo Grande/MS</Detalhes>
      </Contato>
    </ContainerDescricao>
  )
}

export default Descricao

const ContainerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  padding: 24px;
  border: 2px solid #FAC045;
  border-radius: 24px;
  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`

const Texto = styled.p`
  display: inline-flex;
  color: white;
  opacity: 0.8;
  margin: 0;
  font-size: 18px;
  line-height: 24px;
`

const Contato = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 320px;
`

const Detalhes = styled.p`
  margin: 0;
  color: white;
  font-size: 20px;
`

