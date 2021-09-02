import React from "react"
import styled from "styled-components"
import { useState } from 'react';
import ModalFoto from './modal-foto';

const Foto1 = "exemple1.jpg"
const Foto2 = "exemple2.jpg"
const Foto3 = "exemple3.jpg"
const Foto4 = "exemple4.jpg"

const Galeria = () => {
  const listaDeImagens = [
    Foto1, Foto2,
    Foto3, Foto4,
    Foto1, Foto2,
    Foto3, Foto4,
    Foto3, Foto4,
    Foto1, Foto2,
    Foto3, Foto4,
    Foto4,
  ]

  const quantidadeDeFotos = listaDeImagens.length

  const quebraDaLista = () => {
    const fotosPorColuna = quantidadeDeFotos / 3;
    const quantidadeNasColunasArredondado = Math.ceil(fotosPorColuna)

    if (quantidadeNasColunasArredondado === (fotosPorColuna)) {
      return Math.ceil(fotosPorColuna);
    } else return Math.round(fotosPorColuna);
  }

  const [imagemNoModal, setImagemNoModal] = useState()
  const [modalAberto, setModalAberto] = useState(false)

  const mudarImagemDoModal = (imagem) => {
    setImagemNoModal(imagem);
    setModalAberto(true)
  }

  return (
    <GaleriaScroll>
      <ContainerGaleria>
        <Coluna>
          {listaDeImagens.slice(0, quebraDaLista()).map((imagem, index) => (
            <img onClick={() => mudarImagemDoModal(imagem)} key={`coluna1${index}`} src={imagem} />
          ))}
        </Coluna>
        <Coluna>
          {listaDeImagens.slice(quebraDaLista(), quebraDaLista() * 2).map((imagem, index) => (
            <img onClick={() => mudarImagemDoModal(imagem)} key={`coluna2${index}`} src={imagem} />
          ))}
        </Coluna>
        <Coluna>
          {listaDeImagens.slice(quebraDaLista() * 2, quantidadeDeFotos).map((imagem, index) => (
            <img onClick={() => mudarImagemDoModal(imagem)} key={`coluna3${index}`} src={imagem} />
          ))}
        </Coluna>

      </ContainerGaleria>
      <ModalFoto galeria={listaDeImagens} setImagem={setImagemNoModal} imagem={imagemNoModal} aberto={modalAberto} setAberto={setModalAberto} />
    </GaleriaScroll>
  );
}

export default Galeria

const ContainerGaleria = styled.div`
  width: 100%;
  box-shadow: inset 16px 0 48px rgba(0,0,0,.9),
  inset -16px 0 48px rgba(0,0,0,.9);
  display: flex;
  justify-content: center;
  gap: 8px;
`

const GaleriaScroll = styled.div`
  height: 480px;
  overflow-y: auto;
`

const Coluna = styled.div`
  overflow: hidden;
  flex-grow: 1;
  min-width: calc(33.33% - 16px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  img {
    height: auto;
    width: 100%;
    cursor: pointer;
    &:hover,&:focus {
      opacity: 0.8;
    }
  }
`
