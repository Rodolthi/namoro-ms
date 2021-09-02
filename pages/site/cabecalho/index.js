import { Button, FormControl, IconButton, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import Link from "next/link"
import ModalDeSelecaoDeCidade from "../modal-de-selecao-de-cidade"
import { useState, useEffect } from "react"
import ModalMenu from "./modal-menu"
import Icone from "../../../components/icone"

const Cabecalho = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("")
  const [acompanhante, setAcompanhante] = useState("mulher")
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    sessionStorage.getItem('cidadeSelecionada') && setCidadeSelecionada(sessionStorage.getItem('cidadeSelecionada'))
  }, [])

  const handleMudarCidade = (e) => {
    setCidadeSelecionada(e.target.value)
    sessionStorage.setItem('cidadeSelecionada', e.target.value)
  }

  const handleMudarAcompanhante = (e) => {
    setAcompanhante(e.target.value)
  }

  const ConteudoMenu = () => (
    <AcoesMobile>
      <IconButton onClick={() => setMenuAberto(false)} aria-label="Fechar menu">
        <Icone nome="clear" />
      </IconButton>
      {acoesParaUsuario()}
    </AcoesMobile>
  )

  const acoesParaUsuario = () => (
    <>
      <FormControl style={{ width: 240 }} variant="filled">
        <InputLabel id="cidade-label">Selecione sua região</InputLabel>

        <Select
          labelId="cidade-label"
          id="sexo"
          value={cidadeSelecionada}
          onChange={handleMudarCidade}
        >
          <MenuItem selected value="campogrande">Campo Grande</MenuItem>
          <MenuItem value="sidrolandia">Sidrolândia</MenuItem>
          <MenuItem value="terenos">Terenos</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{ width: 240 }} variant="filled">
        <InputLabel id="acompanhante">Acompanhante</InputLabel>

        <Select
          labelId="acompanhante"
          id="sexo"
          value={acompanhante}
          onChange={handleMudarAcompanhante}
        >
          <MenuItem selected value="mulher">Mulher</MenuItem>
          <MenuItem value="homem">Homem</MenuItem>
          <MenuItem value="travesti">Travesti</MenuItem>
        </Select>
      </FormControl>

      <Link href="/portal/login/">
        <Button color="primary" variant="outlined">Quero anunciar</Button>
      </Link>
    </>
  )

  return (
    <>
      <Header>
        <ModalDeSelecaoDeCidade setCidadeSelecionada={setCidadeSelecionada} />

        <Container>
          <Logo src="/logo.svg" />

          <Acoes>
            {acoesParaUsuario()}
          </Acoes>

          <IconButton onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
            <Icone nome="menu" />
          </IconButton>
        </Container>
      </Header>

      <ModalMenu setMenuAberto={setMenuAberto} menuAberto={menuAberto} conteudo={ConteudoMenu()} />
    </>
  )
}

export default Cabecalho

const Logo = styled.img`
  width: 200px;
`

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Acoes = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  & ~ .MuiIconButton-root {
    display: none;
  }
  @media screen and (max-width: 968px) {
    display: none;
    & ~ .MuiIconButton-root {
      display: block;
    }
  }
`

const AcoesMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: black;
  border-radius: 8px;
  align-items: center;
  gap: 32px;
  padding: 24px;
`

const Header = styled.header`
  background: black;
`
