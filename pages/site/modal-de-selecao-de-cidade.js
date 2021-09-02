import { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import React from "react"
import styled from "styled-components"

const ModalDeSelecaoDeCidade = ({ setCidadeSelecionada }) => {
  const [open, setOpen] = useState(false);;

  const abrirModal = () => {
    setOpen(true);
    // document.getElementById("root").style.filter = 'blur(8px)';
  };

  const fecharModal = () => {
    setOpen(false)
    // document.getElementById("root").style.filter = 'blur(0)';
  }

  const escolherCidade = (cidade) => {
    sessionStorage.setItem("cidadeSelecionada", cidade)
    setCidadeSelecionada(cidade)
    fecharModal();
  };

  const body = (
    <CorpoModal>
      <Logo src="/logo.svg" />
      <Label>Escolha a cidade:</Label>
      <Button color="primary" variant="contained" fullWidth size="large" onClick={() => escolherCidade("campogrande")}>Campo Grande</Button>
      <Button color="primary" variant="contained" fullWidth size="large" onClick={() => escolherCidade("sidrolandia")}>Sidrolândia</Button>
      <Button color="primary" variant="contained" fullWidth size="large" onClick={() => escolherCidade("terenos")}>Terenos</Button>
    </CorpoModal>
  );

  useEffect(() => {
    !sessionStorage.getItem("cidadeSelecionada") && abrirModal()
  }, []);

  return (
    <Modal
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>
        {body}
      </div>
    </Modal>
  );
}

export default ModalDeSelecaoDeCidade

const Logo = styled.img`
  width: 240px;
  margin-bottom: 24px;
`

const CorpoModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  background-color: black;
  padding: 24px;
  border-radius: 8px;
  outline: 0;
  .MuiButton-root {
    margin-bottom: 16px;
  }
`

const Label = styled.label`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
  color: white;
`
