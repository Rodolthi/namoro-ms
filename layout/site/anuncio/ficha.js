import React from "react"
import styled from "styled-components"
import Icone from 'components/icone';

const Ficha = () => {
  return (
    <ContainerFicha>
      <Foto>
        <img src="/exemple1.jpg" />
      </Foto>
      <Nome>Alessandra Loira Bonita</Nome>
      <ItemFicha>22 anos</ItemFicha>

      <TituloItem>Atendo:</TituloItem>
      <ItemFicha><Icone nome="male" />Homem</ItemFicha>
      <ItemFicha><Icone nome="female" />Mulher</ItemFicha>
      <ItemFicha><Icone nome="wc" />Casal</ItemFicha>

      <TituloItem>Horário:</TituloItem>
      <ItemFicha><Icone nome="timer" />11:30 às 04:00</ItemFicha>

      <TituloItem>Valor:</TituloItem>
      <ItemFicha><Icone nome="attach_money" />R$200</ItemFicha>
      <ItemFicha><Icone nome="attach_money" />A combinar</ItemFicha>
      <ItemFicha><Icone nome="credit_card" />Aceito cartão</ItemFicha>

      <TituloItem>Locais que atendo:</TituloItem>
      <ItemFicha>Próprio</ItemFicha>
      <ItemFicha>Hotel</ItemFicha>
      <ItemFicha>Motel</ItemFicha>
      <ItemFicha>Casa do cliente</ItemFicha>
    </ContainerFicha >
  );
}

export default Ficha

const ContainerFicha = styled.div`
  background-color: #333;
  width: 224px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  height: 100%;
  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Nome = styled.h2`
  color: var(--branca);
  margin: 0;
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: 800;
`

const Descricao = styled.p`
  margin: 0;
  color: #ddd;
  margin-top: 16px;
`

const Foto = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
  justify-content: center;
  margin-bottom: 16px;
  img {
    height: 100%;
  }
`

const TituloItem = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 0;
  color: var(--branca);
`

const ItemFicha = styled.p`
  margin: 0;
  margin-bottom: 4px;
  color: var(--branca);
  font-size: 16px;
  font-weight: 500;
  opacity: 0.7;
  display: flex;
  align-items: center;
  .material-icons-round {
    margin-right: 4px;
  }
`