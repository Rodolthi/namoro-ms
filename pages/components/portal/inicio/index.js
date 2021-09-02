import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import Link from "next/link";
import Icone from "../../icone";
import BlankSlate from "../blank-slate";
import Anuncios from "./anuncios";

const Home = () => {
  const anuncios = [
    {
      titulo: "Morena Formosa com os peitos tão grandes",
      data: "2021-08-16 23:57:58",
      plano: "Premium",
    },
    {
      titulo: "Morena Formosa",
      data: "2021-08-16 23:57:58",
      plano: "Free",
    },
  ];

  return (
    <Container>
      <Titulo>Meus anúncios</Titulo>

      <Content>
        {anuncios.length && anuncios ? (
          <Anuncios anuncios={anuncios} />
        ) : (
          <BlankSlate
            iconeBotao={"add"}
            texto={"Você ainda não possui anúncios ativos"}
          />
        )}
        <Link link="/portal/planos/">
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
  background-color: #000;
  width: 100%;
  max-width: 720px;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
`;

const Titulo = styled.h1`
  color: #fff;
  margin: 0;
`;

const Content = styled.div`
  text-align: center;
  padding: 24px 0;
`;
