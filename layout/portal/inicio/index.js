import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Icone from "components/icone";
import BlankSlate from "components/blank-slate";
import Anuncios from "./anuncios";
import { useRouter } from "next/router";
import {getAnunciosUsuario} from 'api/controllers/usuario-anuncios';
import { useSelector } from "react-redux";

const Home = () => {
  const [anuncios, setAnuncios] = useState([]);

  const {token} = useSelector((state) => state);
  console.log('token: ', token);
  const router = useRouter();

  const form = new FormData();
  form.append("usuario_id", "conta1@gmail.com");

  useEffect(() => {
    (async() => {      
      const result = await getAnunciosUsuario("conta1@gmail.com", token);
      setAnuncios(result.data);
    })();
  },[token])

  useEffect(() => {
    const pagamentoMercadoPago = router.query;
    if (pagamentoMercadoPago.collection_status === "approved") {
      alert("Pagamento aprovado com sucesso");
    }
  }, [router.query]);

  return (
    <Container>
      <Titulo>Meus anúncios</Titulo>

      <Content>
        {anuncios?.length && anuncios ? (
          <Anuncios anuncios={anuncios} />
        ) : (
          <BlankSlate
            icone="feed"
            texto="Você ainda não possui anúncios ativos"
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

export default Home;

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
