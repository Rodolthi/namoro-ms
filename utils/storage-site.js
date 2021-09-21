const nomeDaChave = "cidadeSelecionada"

export const salvarDados = (valores) => {
  const storage = sessionStorage.getItem(nomeDaChave)
  const dados = JSON.stringify(valores)

  if (!storage) {
    sessionStorage.setItem(nomeDaChave, dados)
  } else atualizarDados(dados)
}

export const atualizarDados = (valores) => {
  const dadosExistentes = obterDados(nomeDaChave)
  const novosValores = JSON.parse(valores)
  const valoresAtualizados = { ...dadosExistentes, ...novosValores }

  sessionStorage.setItem(nomeDaChave, JSON.stringify(valoresAtualizados))
}

export const obterDados = () => {
  const dados = JSON.parse(sessionStorage.getItem(nomeDaChave))
  return dados;
}