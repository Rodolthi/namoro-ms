import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import Link from "next/link";

const planos = [
  {
    nome: "Smart",
    preco: 40,
    dias: 30,
  },
  {
    nome: "Premium",
    preco: 60,
    dias: 60,
  },
];

const Planos = () => {
  return (
    <ContainerFormulario>
      <Titulo>Escolha seu plano</Titulo>
      <ListaDePlanos>
        {planos.map((plano, index) => {
          return (
            <ItemPlano key={index}>
              <Cabecalho>Plano {plano.nome}</Cabecalho>

              <Conteudo>
                <Descricao>{plano.dias} dias de anúncio</Descricao>
                <Preco>R${plano.preco}</Preco>
                <Link link="/portal/anunciar/">
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    type="button"
                  >
                    Comprar
                  </Button>
                </Link>
              </Conteudo>
            </ItemPlano>
          );
        })}
      </ListaDePlanos>
    </ContainerFormulario>
  );
};

const ContainerFormulario = styled.div`
  background: #000;
  padding: 24px;
  margin: 40px auto;
  max-width: 720px;
  border-radius: 8px;
  color: #fff;
`;
const Titulo = styled.h2`
  font-size: 24px;
  margin: 0 0 24px 0;
  color: #fff;
  width: 100%;
`;

const Descricao = styled.p`
  font-size: 20px;
  color: #fff;
  margin-top: 8px;
`;

const Preco = styled.p`
  color: #fff;
  font-size: 40px;
  margin-top: 8px;
`;

const ItemPlano = styled.div`
  border-radius: 16px;
  width: 240px;
  background-color: #333;
  display: flex;
  flex-direction: column;
`;

const Cabecalho = styled.div`
  font-size: 24px;
  background-color: #eeba00;
  color: #000;
  text-align: center;
  font-weight: 700;
  width: 100%;
  padding: 24px;
  border-radius: 16px 16px 0 0;
`;

const Conteudo = styled.div`
  padding: 16px;
  text-align: center;
`;

const ListaDePlanos = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 24px 0;
`;

export default Planos;
