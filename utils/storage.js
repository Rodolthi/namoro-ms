export const salvarDadosDoFormulario = (nome, valores) => {
  sessionStorage.setItem(nome, valores)
}

export const obterDadosDoFormulario = (nomes) => {
  let dados = [];
  nomes.forEach(nome => dados.push(sessionStorage.getItem(nome)))
  return JSON.parse(dados);
}