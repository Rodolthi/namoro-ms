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
import { useLocalStorage } from "utils/useLocalStorage";
import { obterDadosDoFormulario } from "utils/storage";
import { putAprovarCartao } from "api/controllers/pagamento_cartao_aprovado";

const Home = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [tokenLogado] = useLocalStorage('token');
  const [usuarioId] = useLocalStorage('usuarioId');
  const {token} = useSelector((state) => state);
  const router = useRouter();
  
  useEffect(() => {
    function getToken() {
      return !token ? tokenLogado : token;
    }

    (async() => {   
      const result = await getAnunciosUsuario(usuarioId, getToken());
      setAnuncios(result.data);
    })();
  },[token])

  useEffect(() => {
    const pagamentoMercadoPago = router.query;
    if (pagamentoMercadoPago.collection_status === "approved") {
      aprovarAnuncioParaModeracao()
      alert("Pagamento aprovado com sucesso");
    }
  }, [router.query]);

  const aprovarAnuncioParaModeracao = () => { 
    let anuncio = JSON.parse(sessionStorage.getItem('anuncioCriado'))
    console.log(anuncio.data.id)
    putAprovarCartao(anuncio.data.id)
  }

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
