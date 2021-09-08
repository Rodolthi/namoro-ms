import { Button, Link } from "@material-ui/core"
import Icone from "components/icone"
import React from "react"
import styled from "styled-components"

const telefone = "(67) 99999-8383"
const descricaoDoAnuncio = "Descrição completa do anúncio aqui nessa.  completa do anúncio aqui nessa. página. Descrição completa do anúncio aqui nessa página. Descrição completa do anúncio aqui nessa página.Descrição completa do anúncio aqui nessa página."

const Descricao = () => {
  return (
    <ContainerDescricao>
      <Texto>
        {descricaoDoAnuncio}
      </Texto>

      <Contato>
        <Link style={{ width: '100%' }} href={`https://api.whatsapp.com/send?phone=${telefone}`}>
          <LinkWhats variant="contained" color="primary" size="large">
            <img src="/whatsappp-logo.svg" />
            {telefone}
          </LinkWhats>
        </Link>

        <Link style={{ width: '100%' }} href={`tel:${telefone}`}>
          <LinkTelefone variant="outlined" color="primary" size="large" startIcon={<Icone nome="call" />}>
            {telefone}
          </LinkTelefone>
        </Link>
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
  margin-top: 16px;
  padding: 24px;
  border: 2px solid var(--primaria);
  border-radius: 24px;
  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`

const Texto = styled.p`
  display: inline-flex;
  color: var(--branca);
  opacity: 0.8;
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  margin-right: 16px;
  margin-bottom: 16px;
`

const Contato = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 320px;
`

const Detalhes = styled.p`
  margin: 0;
  color: var(--branca);
  font-size: 20px;
`

const LinkWhats = styled(Button)`
  color: var(--preta) !important;
  font-size: 24px !important;
  font-weight: 800 !important;
  margin-bottom: 16px !important;
  width: 100% !important;
  img {
    height: 32px;
    margin-right: 8px;
  }
`

const LinkTelefone = styled(Button)`
  color: var(--preta) !important;
  font-size: 24px !important;
  font-weight: 800 !important;
  margin-bottom: 16px !important;
  color: var(--primaria) !important;
  width: 100% !important;
`
