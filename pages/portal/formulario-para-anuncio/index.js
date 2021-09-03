import React from "react";
import styled from "styled-components";
import Etapas from "./etapas";
import { useState } from "react";
import DadosPessoais from "./dados-pessoais";
import { Button } from "@material-ui/core";
import Icone from "components/icone";
import InformacoesDoAnuncio from "./informacoes-do-anuncio";
import UploadDeImagens from "./upload-de-imagens";
import { useRouter } from "next/router";

const etapas = [
  {
    icone: "person",
    nome: "Dados Pessoais",
  },
  {
    icone: "subject",
    nome: "Descrição",
  },
  {
    icone: "collections",
    nome: "Fotos",
  },
  {
    icone: "credit_score",
    nome: "Checkout",
  },
];

const FormularioParaAnuncio = () => {
  const [imagensGaleria, setImagensGaleria] = useState([]);
  const [imagemPrincipal, setImagemPrincipal] = useState([]);
  const [etapaSelecionada, setEtapaSelecionada] = useState(0);
  const [dadosPessoais, setDadosPessoais] = useState({})

  const router = useRouter()

  const avancarEtapa = () => {
    setEtapaSelecionada(etapaSelecionada + 1);
  };

  const voltarEtapa = () => {
    setEtapaSelecionada(etapaSelecionada - 1);
  };

  const finalizarCadastro = () => {
    alert("Cadastro Finalizado com sucesso");
    router.push("/portal/inicio/");
  };

  return (
    <ContainerFormulario>

      <Etapas
        etapas={etapas}
        etapaSelecionada={etapaSelecionada}
        setarEtapa={setEtapaSelecionada}
      />

      {etapaSelecionada === 0 &&
        <DadosPessoais
          dadosPessoais={dadosPessoais}
          setDadosPessoais={setDadosPessoais}
        />
      }

      {etapaSelecionada === 1 &&
        <InformacoesDoAnuncio />
      }

      {etapaSelecionada === 2 &&
        <UploadDeImagens imagensGaleria={imagensGaleria}
          setImagemPrincipal={setImagemPrincipal}
          setImagensGaleria={setImagensGaleria}
          imagemPrincipal={imagemPrincipal}
        />
      }

      {etapaSelecionada === 3 &&
        <div>Etapa 4</div>
      }

      <ContainerBotoes>
        {etapaSelecionada > 0 && (
          <Button
            onClick={voltarEtapa}
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<Icone nome="navigate_before" />}
          >
            Etapa anterior
          </Button>
        )}
        {etapaSelecionada <= etapas.length - 2 && (
          <Button
            onClick={avancarEtapa}
            variant="contained"
            size="large"
            color="primary"
            endIcon={<Icone nome="navigate_next" />}
          >
            Próximo
          </Button>
        )}
        {etapaSelecionada === etapas.length - 1 && (
          <Button
            onClick={finalizarCadastro}
            variant="contained"
            size="large"
            color="primary"
            endIcon={<Icone nome="navigate_next" />}
          >
            Finalizar cadastro
          </Button>
        )}
      </ContainerBotoes>
    </ContainerFormulario>
  );
};

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  width: 100%;
  margin: 40px auto;
  background-color: #000;
  padding: 24px;
  border-radius: 16px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  .MuiButton--root {
    margin: 12px;
  }
`;

export default FormularioParaAnuncio
