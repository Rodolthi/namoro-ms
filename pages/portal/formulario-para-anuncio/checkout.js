import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { obterDadosDoFormulario, salvarDadosDoFormulario } from "utils/storage";
import Icone from "components/icone";
import lerURI from "utils/lerURI";
import { useRouter } from "next/router";

const Checkout = ({ imagensGaleria, imagemPrincipal }) => {
  const router = useRouter()
  const { register, getValues, formState: { errors }, handleSubmit } = useForm()
  const [deposito, setDeposito] = useState(false)
  const [comprovante, setComprovante] = useState([])

  //TODO: Fazer Checkout com mercado pago
  const finalizarCadastro = () => {
    const dados = obterDadosDoFormulario("dadosDoFormulario")
    const todosOsdados = {
      ...dados,
      ...{ deposito },
      ...{ imagemPrincipal },
      ...{ imagensGaleria },
      ...{ comprovante }
    }

    if (deposito && !comprovante.length) {
      alert("Insira o seu comprovante de depósito!")
    } else {
      console.log(todosOsdados)
      router.push("/portal/inicio")
    }
  }

  const handleComprovante = (e) => {
    lerURI(e).then((imagem) => {
      setComprovante(imagem);
    });
  };

  const handleChangeDeposito = () => {
    setDeposito(!deposito)
    setComprovante([])
  }

  return (
    <Formulario noValidate autoComplete="off" onSubmit={handleSubmit(finalizarCadastro)} >
      <Titulo>Pagamento</Titulo>
      <FormControl fullWidth component="fieldset">
        <FormGroup row style={{ color: "white" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={deposito}
                color="primary"
                {...register("deposito")}
                onChange={handleChangeDeposito}
              />
            }
            label="Deseja fazer o pagamento por depósito"
          />
        </FormGroup>
      </FormControl>

      {!deposito &&
        <p>Fazer pagamento </p>
      }

      {deposito && <>
        <DadosParaDeposito>
          <h2>Dados para depósito:</h2>
          <p><strong>Banco do Brasil: 001</strong></p>
          <p>Agência: 2916-5</p>
          <p>Conta: 40140-4</p>
        </DadosParaDeposito>

        <input
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          type="file"
          id="imagem-comprovante"
          onChange={(e) => handleComprovante(e)}
        />
        <BotaoDeUpload htmlFor="imagem-comprovante">
          Faça o upload do comprovante de depósito
        </BotaoDeUpload>
        {comprovante?.length ?
          <ContainerImagem>
            <Imagem src={comprovante[0]?.result} />
          </ContainerImagem> : ""}
        <p style={{ color: "var(--branca)" }}>Deste modo de pagamento, teremos que aprovar seu anúncio para ele entrar no ar.</p>
      </>
      }

      <div>
        <Button variant="contained"
          color="primary"
          type="submit"
          fullWidth
          startIcon={<Icone nome="check" />}
        >Finalizar compra</Button>
      </div>
    </Formulario>
  );
};

export default Checkout

const Formulario = styled.form`
  background: #000;
  width: 100%;
  .MuiTextField-root,
  .MuiFormControl-root {
    margin-bottom: 16px;
  }
`;

const Titulo = styled.h2`
  font-size: 24px;
  color: var(--branca);
`;

const DadosParaDeposito = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: var(--branca);
  padding: 24px 24px;
  border: 1px solid var(--branca);
  border-radius: 16px;
  margin-bottom: 24px;
  & p, h2 {
    margin: 0;
  }
`;

const BotaoDeUpload = styled.label`
  border: 2px solid var(--primaria);
  width: 100%;
  height: 80px;
  font-family: "proxima-nova" sans-serif;
  color: var(--primaria);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 0 16px;
  text-align: center;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: translate(0, -1px);
  }
`;

const ContainerImagem = styled.div`
  position: relative;
  max-width: 320px;
  margin: 16px;
`;

const Imagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;