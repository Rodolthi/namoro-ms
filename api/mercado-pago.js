
const obterDadosMP = (title, price) => {
  let data = {
    items: [
      {
        title: title,
        quantity: 1,
        currency_id: "BRL",
        unit_price: price,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/portal/inicio",
      failure: "http://localhost:3000/portal/inicio",
      pending: "http://localhost:3000/portal/inicio"
    },
    auto_return: "approved",
  };


  const respostaDaAPI = () =>
    fetch(
      `https://api.mercadopago.com/checkout/preferences?access_token=TEST-2148138877475807-090120-149eae5aa5df650f2360ea7371ff7436-130928739`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((resposta) => {
        return resposta;
      });

  return respostaDaAPI();
}

export default obterDadosMP