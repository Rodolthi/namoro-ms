export const salvarDadosDoFormulario = (nome, valores) => {
  let dados;
  dados = JSON.stringify(valores)
  sessionStorage.setItem(nome, dados)
}

//TODO : Aqui a ideia é fazer um incremento nos objetos
export const atualizarDadosDoFormulario = (nome, valores) => {
  let dados;
  dados = JSON.stringify(valores)
  sessionStorage.getItem(nome, dados)

  sessionStorage.setItem(nome, dados)
}

export const obterDadosDoFormulario = (nomes) => {
  let dados = [];

  nomes.forEach(nome => {
    let itemStorage = {};

    itemStorage = JSON.parse(sessionStorage.getItem(nome))
    dados.push(itemStorage)
  })

  return dados;
}