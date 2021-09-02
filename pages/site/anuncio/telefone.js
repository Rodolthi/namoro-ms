import { Button } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import Link from "next/link"

const Telefone = ({ numero, pequeno }) => {
  return (
    <Link href={`https://api.whatsapp.com/send?phone=${numero}`}>
      <LinkTelefone className={pequeno && "pequeno"} variant="contained" color="primary" size="large">
        <img src="whatsappp-logo.svg" />
        {numero}
      </LinkTelefone>
    </Link>
  )
}

export default Telefone

const LinkTelefone = styled(Button)`
  color: black !important;
  font-size: 24px !important;
  font-weight: 800 !important;
  margin-bottom: 16px !important;
  img {
    height: 32px;
    margin-right: 8px;
  }
  &.pequeno {
    font-size: 16px !important;
    padding: 8px !important;
    display: flex;
    flex-direction: column;
    img {
      display: none;
      height: 24px;
      margin-right: 4px;
    }
  }
`
