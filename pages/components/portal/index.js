import React from "react";
import styled from "styled-components";
import Login from "./login";
import { Route, Switch } from "react-router";
import Inicio from "./inicio";
import Cabecalho from "./cabecalho";
import Planos from "./planos";
import FormularioParaAnuncio from "./formulario-para-anuncio";

const Portal = () => {
  return (
    <Switch>
      <Route exact path="/portal/">
        <Login />
      </Route>

      <Route exact path="/portal/">
        <Page>
          <Cabecalho></Cabecalho>
          <Switch>
            <Route exact path="/portal/inicio/">
              <Inicio />
            </Route>
            <Route exact path="/portal/planos/">
              <Planos></Planos>
            </Route>

            <Route exact path="/portal/anunciar/">
              <FormularioParaAnuncio />
            </Route>
          </Switch>
        </Page>
      </Route>
    </Switch>
  );
};

export default Portal;

const Page = styled.div`
  width: 100%;
  height: 100%;
`;
