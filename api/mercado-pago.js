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
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "pix",
        },
        {
          id: "pec",
        },
        {
          id: "bolbradesco",
        },
      ],
    },
    back_urls: {
      success: "http://localhost:3000/portal/inicio",
      failure: "http://localhost:3000/portal/inicio",
      pending: "http://localhost:3000/portal/inicio",
    },
    auto_return: "approved",
  };

  const respostaDaAPI = () =>
    fetch(
      `https://api.mercadopago.com/checkout/preferences?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MP}`,
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
};

export default obterDadosMP;
