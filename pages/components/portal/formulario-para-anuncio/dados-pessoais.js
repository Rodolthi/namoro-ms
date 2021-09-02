import React from "react";
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
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const DadosPessoais = ({ dadosPessoais, setDadosPessoais }) => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const normalizarTelefone = (valor) => {
    let novoValor = valor.replace(/\D/g, "");
    novoValor =
      novoValor.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3").substr(0, 15) ||
      "";
    return novoValor;
  };

  const normalizarIdade = (valor) => {
    let novoValor = valor.substr(0, 2) || "";
    return novoValor;
  };

  const avancarEtapa = () => {
    console.log(JSON.stringify(dadosPessoais));
    alert("Deu certo");
  };

  useEffect(() => {
    setDadosPessoais(getValues());
  }, []);

  return (
    <Formulario
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(avancarEtapa)}
    >
      <Titulo>Dados do anunciante</Titulo>

      <TextField
        autoCapitalize="off"
        label="Nome completo"
        variant="outlined"
        fullWidth
        id="nome"
        type="text"
        helperText={errors.nome?.message}
        error={errors.nome?.type === "required"}
        {...register("nome", { required: "O nome é obrigatório" })}
      />

      <TextField
        autoCapitalize="off"
        {...register("idade", {
          required: true,
          min: { value: 18, message: "Você não pode ser menor de idade!" },
          max: 99,
        })}
        label="Idade"
        variant="outlined"
        fullWidth
        id="idade"
        type="number"
        helperText={errors.idade?.type === "min" && errors.idade?.message}
        error={errors.idade?.type === "min"}
        onChange={(event) => {
          const { value } = event.target;
          event.target.value = normalizarIdade(value);
        }}
      />

      <TextField
        autoCapitalize="off"
        {...register("telefone", { require: true })}
        label="Telefone"
        variant="outlined"
        fullWidth
        id="telefone"
        type="phone"
        onChange={(event) => {
          const { value } = event.target;
          event.target.value = normalizarTelefone(value);
        }}
      />

      <FormControl fullWidth variant="filled">
        <InputLabel id="cidade-label">Como você se identifica</InputLabel>

        <Select
          helperText={errors.sexo?.message}
          error={errors.sexo?.type === "required"}
          {...register("sexo", { required: true })}
          labelId="cidade-label"
          id="sexo"
        >
          <MenuItem value="mulher">Mulher</MenuItem>
          <MenuItem value="homens">Homem</MenuItem>
          <MenuItem value="travesti">Travesti</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">Qual seu interesse</FormLabel>
        <FormGroup row style={{ color: "white" }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="atendeHomem"
                helperText={errors.atendeHomem?.message}
                error={errors.atendeHomem?.type === "required"}
                {...register("atendeHomem", { required: true })}
              />
            }
            label="Homem"
          />
          <FormControlLabel
            control={
              <Checkbox
                helperText={errors.atendeMulher?.message}
                error={errors.atendeMulher?.type === "required"}
                {...register("atendeMulher", { required: true })}
                color="primary"
                name="atendeMulher"
              />
            }
            label="Mulher"
          />
          <FormControlLabel
            control={
              <Checkbox
                helperText={errors.atendeCasal?.message}
                error={errors.atendeCasal?.type === "required"}
                {...register("atendeCasal", { required: true })}
                color="primary"
                name="atendeCasal"
              />
            }
            label="Casal"
          />
        </FormGroup>
      </FormControl>

      <FormControl fullWidth variant="filled">
        <InputLabel id="cidade-label">Cidade</InputLabel>

        <Select
          helperText={errors.cidade?.message}
          error={errors.cidade?.type === "required"}
          {...register("cidade", { required: true })}
          labelId="cidade-label"
          id="cidade"
        >
          <MenuItem value="campoGrande">Campo Grande</MenuItem>
          <MenuItem value="sidrolandia">Sidrolândia</MenuItem>
          <MenuItem value="terenos">Terenos</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">Local que atende</FormLabel>
        <FormGroup row style={{ color: "white" }}>
          <FormControlLabel
            control={
              <Checkbox
                helperText={errors.atendeEmLocalProprio?.message}
                error={errors.atendeEmLocalProprio?.type === "required"}
                {...register("atendeEmLocalProprio", { required: true })}
                color="primary"
                name="local-proprio"
              />
            }
            label="Local Próprio"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="hotel"
                helperText={errors.atendeEmHotel?.message}
                error={errors.atendeEmHotel?.type === "required"}
                {...register("atendeEmHotel", { required: true })}
              />
            }
            label="Hotel"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="motel"
                helperText={errors.atendeEmMotel?.message}
                error={errors.atendeEmMotel?.type === "required"}
                {...register("atendeEmMotel", { required: true })}
              />
            }
            label="Motel"
          />
        </FormGroup>
      </FormControl>

      <TextField
        autoCapitalize="off"
        label="Horário"
        variant="outlined"
        fullWidth
        id="horário"
        type="text"
        helperText={errors.horario?.message}
        error={errors.horario?.type === "required"}
        {...register("horario", { required: true })}
      />

      <FormControl style={{ color: "white" }} component="fieldset">
        <FormLabel component="legend">Aceita cartão?</FormLabel>
        <RadioGroup row aria-label="aceitaCartao">
          <FormControlLabel
            value="nao"
            control={<Radio color="primary" />}
            label="Não"
            helperText={errors.aceitaCartao?.message}
            error={errors.aceitaCartao?.type === "required"}
            {...register("aceitaCartao", { required: true })}
          />
          <FormControlLabel
            value="sim"
            control={<Radio color="primary" />}
            label="Sim"
            helperText={errors.aceitaCartao?.message}
            error={errors.aceitaCartao?.type === "required"}
            {...register("aceitaCartao", { required: true })}
          />
        </RadioGroup>
      </FormControl>

      <Button color="primary" type="submit">
        Próxima
      </Button>
    </Formulario>
  );
};

export default DadosPessoais;

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
