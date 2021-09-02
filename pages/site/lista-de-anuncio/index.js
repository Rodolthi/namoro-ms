import React from "react"
import styled from "styled-components"
import Link from "next/link"

const divStyle = (src) => ({
  backgroundImage: 'url(' + src + ')'
})

const ListaDeAnuncios = () => {


  const irParaOAnuncio = () => {
    data.link = "/anuncio"
  }

  return (
    <Lista>
      {itens.map((item, index) => {
        return (
          <li key={index}>
            <Item href="/anuncio/" style={divStyle(item.imagem)}>
              <span className="infos">
                <p className="nome">{item.nome}</p>
                <p className="telefone">
                  <img src="whatsappp-logo.svg" />
                  {item.telefone}
                </p>
                {item.comLocal && <p className="descricao">Com local</p>}
                <p className="descricao">{item.cidade}/{item.estado}</p>
              </span>
            </Item>
          </li>
        )
      })}
    </Lista>
  )
}

export default ListaDeAnuncios

const Lista = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  min-height: 60vh;
  padding: 24px 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  gap: 24px;
  flex-wrap: wrap;
`

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center center;
  min-width: 240px;
  height: 320px;
  border-radius: 8px;
  transition: ease .2s;
  cursor: pointer;
  &:hover,&:focus{
    transform: translate(0, -3px);
    background-color: green;
  }
  .infos {
    position: relative;
    display: flex;
    background-color: rgba(250,192,69, 0.9);
    flex-direction: column;
    text-align: center;
    margin: 8px;
    border-radius: 8px;
    padding: 8px 0;
    &::after {
      content: "";
      position: absolute;
      top: 4px;
      right: 4px;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background-color: white;
    }
  }
  .nome {
    margin: -2px 0;
    font-weight: 600;
    font-size: 16px;
  }
  .descricao {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
  }
  .telefone {
    font-size: 18px;
    font-weight: 800;
    display: flex;
    align-items: center;
    margin: -2px auto;
    img {
      margin-right: 8px;
      height: 20px;
    }
  }
`






//Mock
const foto1 = "exemple1.jpg"
const foto2 = "exemple2.jpg"
const foto3 = "exemple3.jpg"
const foto4 = "exemple4.jpg"
const foto5 = "exemple5.jpg"
const itens = [
  {
    nome: "Bruninha",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto1
  },
  {
    nome: "Gisele",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto2
  },
  {
    nome: "Verônica",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto3
  },
  {
    nome: "Letícia",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto4
  },
  {
    nome: "Malu Maitê",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto5
  },
  {
    nome: "Bruninha",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto1
  },
  {
    nome: "Gisele",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto2
  },
  {
    nome: "Verônica",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto3
  },
  {
    nome: "Letícia",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto4
  },
  {
    nome: "Malu Maitê",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto5
  },
  {
    nome: "Bruninha",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto1
  },
  {
    nome: "Gisele",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto2
  },
  {
    nome: "Verônica",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto3
  },
  {
    nome: "Letícia",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto4
  },
  {
    nome: "Malu Maitê",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto5
  },
  {
    nome: "Bruninha",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto1
  },
  {
    nome: "Gisele",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto2
  },
  {
    nome: "Verônica",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto3
  },
  {
    nome: "Letícia",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto4
  },
  {
    nome: "Malu Maitê",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto5
  },
  {
    nome: "Bruninha",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto1
  },
  {
    nome: "Gisele",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto2
  },
  {
    nome: "Verônica",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto3
  },
  {
    nome: "Letícia",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto4
  },
  {
    nome: "Malu Maitê",
    telefone: "(67) 99654-7312",
    comLocal: true,
    cidade: "Campo Grande",
    estado: "MS",
    imagem: foto5
  },
]
