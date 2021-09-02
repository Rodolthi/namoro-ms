import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import styled from "styled-components";
import Link from "next/link";
import logo from "../../public/logo.svg";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 240,
  },
}));

const Cabecalho = () => {
  const classes = useStyles();

  return (
    <Header>
      <Container>
        <Logo src={logo} />

        <Acoes>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel id="cidade-label">Selecione sua região</InputLabel>

            <Select
              labelId="cidade-label"
              id="sexo"
              // value={cidade}
              // onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="campo-grande">Campo Grande</MenuItem>
              <MenuItem value="sidrolandia">Sidrolândia</MenuItem>
              <MenuItem value="terenos">Terenos</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl} variant="filled">
            <InputLabel id="acompanhante">Acompanhante</InputLabel>

            <Select
              labelId="acompanhante"
              id="sexo"
              // value={cidade}
              // onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="garotas">Garotas</MenuItem>
              <MenuItem value="homens">Homem</MenuItem>
              <MenuItem value="travesti">Travesti</MenuItem>
            </Select>
          </FormControl>

          <Link link="/portal/">
            <Button color="primary" variant="outlined">
              Quero anunciar
            </Button>
          </Link>
        </Acoes>
      </Container>
    </Header>
  );
};

export default Cabecalho;

const Logo = styled.img`
  width: 200px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

const Acoes = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Header = styled.header`
  background: black;
`;
