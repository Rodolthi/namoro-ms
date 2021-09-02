import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import logo from "../../public/logo.svg";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const ModalDeSelecaoDeAcompanhante = () => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const abrirModal = () => {
    setOpen(true);
    document.getElementById("root").style.filter = "blur(8px)";
  };

  const fecharModal = () => {
    setOpen(false);
    document.getElementById("root").style.filter = "blur(0)";
  };

  const escolherGenero = () => {
    fecharModal();
    sessionStorage.setItem("viuModalDeInteresse", true);
  };

  const body = (
    <CorpoModal style={modalStyle}>
      <Logo src={logo} />
      <Label>Escolha seu interesse:</Label>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        size="large"
        onClick={() => escolherGenero("garotas")}
      >
        Garotas
      </Button>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        size="large"
        onClick={() => escolherGenero("homem")}
      >
        Homens
      </Button>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        size="large"
        onClick={() => escolherGenero("travesti")}
      >
        Travestis
      </Button>
    </CorpoModal>
  );

  useEffect(() => {
    !sessionStorage.getItem("viuModalDeInteresse") && abrirModal();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalDeSelecaoDeAcompanhante;

const Logo = styled.img`
  width: 240px;
  margin-bottom: 24px;
`;

const CorpoModal = styled.div`
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
`;

const Label = styled.label`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;
