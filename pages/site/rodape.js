import React from "react"
import styled from "styled-components"

const termosDeUso = `
Termos de Uso são um conjunto de termos legais
definidos pelo proprietário de um site. Eles estabelecem os
termos e condições que regem as atividades dos visitantes no referido
site e a relação entre os visitantes e o proprietário do site.
Os termos devem ser definidos de acordo com as necessidades específicas e
a natureza de cada site. Por exemplo, um site que ofereça produtos a clientes
em transações de comércio eletrônico exige Termos que sejam diferentes dos
Termos de um site que fornecem apenas informações.
`

const Rodape = () => {
  return (
    <RodapeContainer>
      <img className="logo" src="logo.svg" />
      <p className="texto">{termosDeUso}</p>
    </RodapeContainer>
  )
}

export default Rodape

const RodapeContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px;
  text-align: center;
  background-color: #222;
  .logo {
    margin-bottom: 16px;
    max-width: 240px;
  }
  .texto {
    color: white;
    font-size: 16px;
    line-height: 24px;
    max-width: 1200px;
    text-align: center;
    opacity: 0.7;
  }
`
