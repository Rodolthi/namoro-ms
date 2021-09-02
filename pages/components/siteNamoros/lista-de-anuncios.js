import React from "react";
import styled from "styled-components";

const itens = [
  "item",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
];

const ListaDeAnuncios = () => {
  return (
    <Lista>
      {itens.map((item, index) => {
        return <Item key={index}>{item}</Item>;
      })}
    </Lista>
  );
};

export default ListaDeAnuncios;

const Lista = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  min-height: 60vh;
  padding: 24px 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
  flex-wrap: wrap;
`;

const Item = styled.li`
  background-color: red;
  min-width: 240px;
  height: 240px;
  border-radius: 8px;
  transition: ease 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: translate(0, -3px);
    background-color: green;
  }
`;
