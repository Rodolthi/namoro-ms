import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Icone from "components/icone";
import BlankSlate from "../blank-slate";
import Anuncios from "./anuncios";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter()
  const anuncios = [
    {
      titulo: "Morena Formosa 18",
      data: "2021-08-16 23:57:58",
      plano: "30 dias",
      status: "pendente",
    },
    {
      titulo: "Loira massagista",
      data: "2021-08-16 23:57:58",
      plano: "30 dias",
      status: "ativo",
    },
    {
      titulo: "Morena Formosa",
      data: "2021-08-16 23:57:58",
      plano: "60 dias",
      status: "pendente",
    },
  ];

  useEffect(() => {
    const pagamentoMercadoPago = router.query
    if (pagamentoMercadoPago.collection_status === "approved") {
      alert("Pagamento aprovado com sucesso")
    }
  }, [router.query])

  return (
    <Container>
      <Titulo>Meus anúncios</Titulo>

      <Content>
        {anuncios?.length && anuncios ? (
          <Anuncios anuncios={anuncios} />
        ) : (
          <BlankSlate
            iconeBotao={"add"}
            texto={"Você ainda não possui anúncios ativos"}
          />
        )}
        <Link href="/portal/planos/">
          <Button
            size="large"
            color="primary"
            type="button"
            variant="contained"
            startIcon={<Icone nome="add" />}
          >
            Criar novo anúncio
          </Button>
        </Link>
      </Content>
    </Container>
  );
};

export default Home

const Container = styled.section`
  background-color: var(--preta);
  width: calc(100% - 32px);
  max-width: 720px;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
`;

const Titulo = styled.h1`
  color: var(--branca);
  margin: 0;
`;

const Content = styled.div`
  text-align: center;
  padding: 24px 0;
`;
