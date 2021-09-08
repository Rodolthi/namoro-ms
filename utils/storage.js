export const salvarDadosDoFormulario = (nome, valores) => {
  let dados;
  dados = JSON.stringify(valores)
  sessionStorage.setItem(nome, dados)
}

export const obterDadosDoFormulario = (nomes) => {
  let dados = [];
  nomes.forEach(nome => dados.push(sessionStorage.getItem(nome)))
  return JSON.parse(dados);
}