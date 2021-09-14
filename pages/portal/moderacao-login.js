import { Button, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";

const Moderacao = () => {
  const router = useRouter();

  const [senhaInserida, setSenhaInserida] = useState("");
  const [senhaIncorreta, setSenhaIncorreta] = useState(false);

  const entrarNaPágina = () => {
    if (senhaInserida === process.env.NEXT_PUBLIC_CHAVE_MODERACAO) {
      localStorage.setItem("podeModerar", true);
      router.push("/portal/moderacao-de-anuncios/");
    } else {
      setSenhaIncorreta(true);
    }
  };

  const handleChange = (e) => {
    setSenhaIncorreta(false);
    setSenhaInserida(e.target.value);
  };

  return (
    <div>
      <TextField
        type="text"
        autoComplete="off"
        label="Senha para acesso"
        variant="outlined"
        fullWidth
        id="senha"
        helperText={senhaIncorreta && "Insira a senha correta para acesso"}
        error={senhaIncorreta}
        onChange={(e) => handleChange(e)}
      />

      <Button
        color="primary"
        size="large"
        variant="contained"
        onClick={entrarNaPágina}
      >
        Entrar na moderação
      </Button>

      <ul>
        <li>Item para moderação</li>
      </ul>
    </div>
  );
};

export default Moderacao;
