import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const DadosPessoais = ({ dadosPessoais, setDadosPessoais }) => {
  const { register, getValues, formState: { errors }, handleSubmit } = useForm();
  const [cidades] = useState(["Campo Grande", "Sidrolândia", "Terenos"])

  const normalizarTelefone = (valor) => {
    let novoValor = valor.replace(/\D/g, '')
    novoValor = novoValor.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3").substr(0, 15) || ""
    return novoValor;
  }

  const normalizarIdade = (valor) => {
    let novoValor = valor.substr(0, 2) || "";
    return novoValor;
  }

  const avancarEtapa = () => {
    setDadosPessoais(getValues())

    console.log("state", JSON.stringify(dadosPessoais))
    console.log("get", JSON.stringify(getValues()))
    alert("Deu certo")
  }

  return (
    <Formulario noValidate autoComplete="off" onSubmit={handleSubmit(avancarEtapa)}>
      <Titulo>Dados do anunciante</Titulo>

      <TextField
        autoComplete="off"
        label="O Nome que vai aparecer no anúncio"
        variant="outlined"
        fullWidth
        id="nome"
        type="text"
        helperText={errors.tituloAnuncio?.message}
        error={errors?.tituloAnuncio}
        {...register("tituloAnuncio", { required: "O nome é obrigatório" })}
      />

      <FormControl fullWidth variant="filled">
        <InputLabel id="cidade-label">Como você se identifica</InputLabel>

        <Select
          error={errors?.sexo}
          {...register("sexo", { required: true })}
          labelId="cidade-label"
          id="sexo"
          valor="mulher"
        >
          <MenuItem value="mulher">Mulher</MenuItem>
          <MenuItem value="homens">Homem</MenuItem>
          <MenuItem value="travesti">Travesti</MenuItem>
        </Select>
      </FormControl>

      <TextField
        autoComplete="off"
        {...register("idade", {
          required: "A idade é obrigatória", min:
            { value: 18, message: "Você não pode ser menor de idade!" }, max: 99
        })}
        label="Idade"
        variant="outlined"
        fullWidth
        id="idade"
        type="text"
        helperText={errors.idade?.message}
        error={errors.idade}
        onChange={(event) => {
          const { value } = event.target
          event.target.value = normalizarIdade(value)
        }}
      />

      <Row>
        <TextField
          autoComplete="off"
          label="Telefone"
          variant="outlined"
          fullWidth
          type="phone"
          error={errors?.telefone}
          {...register("telefone", { required: "O telefone é obrigatório." })}
          helperText={errors.telefone?.message}
          onChange={(event) => {
            const { value } = event.target
            event.target.value = normalizarTelefone(value)
          }}
        />
        <FormControl fullWidth component="fieldset">
          <FormGroup row style={{ color: "white" }}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  {...register("esseNumeroEhWhatsapp")}
                />
              }
              label="Este número é Whatsapp"
            />
          </FormGroup>
        </FormControl>
      </Row>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">Quem você atende</FormLabel>
        <FormGroup row style={{ color: "white" }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...register("atendeHomem")}
              />
            }
            label="Homem"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("atendeMulher")}
                color="primary"
              />
            }
            label="Mulher"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register("atendeCasal")}
                color="primary"
              />
            }
            label="Casal"
          />
        </FormGroup>
      </FormControl>

      <FormControl fullWidth variant="filled">
        <InputLabel id="cidade-label">Cidade</InputLabel>

        <Select
          error={errors?.cidade}
          {...register("cidade", { required: true })}
          labelId="cidade-label"
          id="cidade"
          valor={cidades[0]}
        >
          {cidades.map((cidade, index) => (
            <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">Local que atende</FormLabel>
        <FormGroup row style={{ color: "white" }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...register("atendeEmLocalProprio")}
              />
            }
            label="Local Próprio"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...register("atendeEmHotel")}
              />
            }
            label="Hotel"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...register("atendeEmMotel")}
              />
            }
            label="Motel"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...register("casaDoCliente")}
              />
            }
            label="Casa do cliente"
          />
        </FormGroup>
      </FormControl>

      <Row>
        <TextField
          autoComplete="off"
          label="Começa a atender que horas?"
          variant="outlined"
          fullWidth
          type="time"
          helperText={errors.comecaoAtender?.message}
          error={errors?.comecaoAtender}
          {...register("comecaoAtender", { required: "Obrigatório" })}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800,
          }}
        />

        <TextField
          autoComplete="off"
          label="Atende até que horas?"
          variant="outlined"
          fullWidth
          type="time"
          helperText={errors.atendeAte?.message}
          error={errors?.atendeAte}
          {...register("atendeAte", { required: "Obrigatório" })}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800,
          }}
        />
      </Row>


      <FormControl
        error={errors?.aceitaCartao}
        style={{ color: "white" }} component="fieldset">
        <FormLabel component="legend">Aceita cartão?</FormLabel>
        <RadioGroup
          row
          aria-label="aceitaCartao"
        >
          <FormControlLabel
            value="nao"
            control={<Radio color="primary" />}
            label="Não"
            {...register("aceitaCartao", { required: true })}
          />
          <FormControlLabel
            value="sim"
            control={<Radio color="primary" />}
            label="Sim"
            {...register("aceitaCartao", { required: true })}
          />
        </RadioGroup>
      </FormControl>

      <Button color="primary" type="submit">Próxima</Button>
    </Formulario >
  );
};

export default DadosPessoais

const Formulario = styled.form`
  background: #000;
  .MuiTextField-root,
  .MuiFormControl-root {
    margin-bottom: 16px;
  }
`;

const Titulo = styled.h2`
  font-size: 24px;
  color: white;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

