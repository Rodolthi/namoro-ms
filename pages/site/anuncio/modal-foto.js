import React from "react"
import styled from "styled-components"
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Icone from 'components/icone';

const ModalFoto = ({ setAberto, imagem, setImagem, aberto, galeria }) => {
  const avancarFoto = (e, imagem) => {
    const indexDaImagem = galeria.indexOf(imagem)

    e.stopPropagation()
    setImagem(galeria[indexDaImagem + 1])
  }

  const voltarFoto = (e, imagem) => {
    const indexDaImagem = galeria.indexOf(imagem)

    e.stopPropagation()
    if (indexDaImagem === 0) {
      setImagem(galeria[galeria?.length - 1])
    } else setImagem(galeria[indexDaImagem - 1])
  }

  return (
    <Modal
      onClose={() => setAberto(false)}
      open={aberto}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>
        <Imagem onClick={() => setAberto(false)}>
          <img src={imagem} />
        </Imagem>

        <BotaoParaFechar size="large" color="primary" onClick={() => setAberto(false)}>
          <Icone nome="clear" />
        </BotaoParaFechar>

        <Setas onClick={() => setAberto(false)}>
          <Button size="large" color="primary" onClick={(e) => voltarFoto(e, imagem)}>
            <Icone nome="arrow_back_ios" />
          </Button>
          <Button size="large" color="primary" onClick={(e) => avancarFoto(e, imagem)}>
            <Icone nome="arrow_forward_ios" />
          </Button>
        </Setas>
      </div>
    </Modal>
  )
}

export default ModalFoto

const Imagem = styled.div`
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-color: red;
  height: 90vh;
  max-width: 90vw;
  width: auto;
  border-radius: 8px;
  @media screen and (max-width: 1366px) {
    height: 70vh;
  }
  img {
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 1366px) {
      object-fit: cover;
    }
  }
`
const BotaoParaFechar = styled(Button)`
  position: absolute !important;
  top: 16px !important;
  right: 16px !important;
  `

const Setas = styled.div`
  position: fixed !important;
  top: 50%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 160px;
  @media screen and (max-width: 1080px) {
    padding: 0 40px;
  }
`
