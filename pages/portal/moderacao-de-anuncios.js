import { Button } from "@material-ui/core";
import BlankSlate from "components/blank-slate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAnunciosModeracao } from 'api/controllers/pegar-anuncio-moderacao';
import { postAprovarAnuncio } from 'api/controllers/aprovar-anuncio';
import ModalFoto from "layout/site/anuncio/modal-foto";
import ModalDeDadosDoAnuncio from "layout/portal/moderacao/modal-de-dados-do-anuncio";

const ModeracaoDeAnuncios = () => {
  const [autenticado, setAutenticado] = useState(false);
  const [anuncios, setAnuncios] = useState([]);
  const router = useRouter();
  const [imagemNoModal, setImagemNoModal] = useState()
  const [modalAberto, setModalAberto] = useState(false)
  const [imagens, setImagens] = useState()
  const [modalDeDadosAberto, setModalDeDadosAberto] = useState(false)

  const abrirModal = (anuncio) => {
    setImagens(fotosDaGaleria(anuncio))
    setImagemNoModal(anuncio.fotos[0].src)
    setModalAberto(true)
  }

  const fotosDaGaleria = (anuncio) => {
    let listaDeImagens = anuncio?.fotos.reduce((acc, item) => {
      return [
        ...acc,
        item.src
      ]
    }, []);

    if (anuncio?.deposito) {
      listaDeImagens.pop()
    }

    return listaDeImagens
  }

  const aprovarAnuncio = async (slug) => {
    const aprovado = await postAprovarAnuncio(slug);
    aprovado.status === 200 && location.reload();
  }


  useEffect(() => {
    setAutenticado(localStorage.getItem("podeModerar"));

    if (!localStorage.getItem("podeModerar")) {
      alert("Você não tem acesso à esta página");
      router.push("/portal/moderacao-login/");
    }

    (async () => {
      const result = await getAnunciosModeracao();
      setAnuncios(result.data);
    })();

  }, []);


  return (
    <>
      {autenticado && (
        <Lista>
          {anuncios.map((item, index) => {
            return (
              <Anuncio key={index}>
                <h2>{item.tituloAnuncio}</h2>
                <h3>Id do anunciante: {item.id}</h3>
                <a
                  title="Visualizar comprovante"
                  target="_blank"
                  rel="noreferrer"
                  href={item.fotos[item.fotos.length - 1].src}
                >
                  <img src={item.fotos[item.fotos.length - 1].src} />
                </a>

                <Button size="large" onClick={() => abrirModal(item)} variante="contained">
                  Ver fotos do anúncio
                </Button>
               
                <Button size="large" onClick={() => setModalDeDadosAberto(true)} variante="contained">
                  Ver informações
                </Button>
                

                <footer>
                  <Button size="large" variante="contained" color="primary" onClick={() => aprovarAnuncio(item.id)}>
                    Aprovar anúncio
                  </Button>
                </footer>
                <ModalFoto galeria={imagens} setImagem={setImagemNoModal} imagem={imagemNoModal} aberto={modalAberto} setAberto={setModalAberto} />
                <ModalDeDadosDoAnuncio dados={item} aberto={modalDeDadosAberto} setAberto={setModalDeDadosAberto} />

              </Anuncio>
            )
          })}
          {anuncios.length === 0 && (
            <BlankSlate
              icone="feedback"
              texto="Ops... Não encontramos anúncios para serem moderados."
            />
          )}
        </Lista>
      )}
    </>
  );
};

export default ModeracaoDeAnuncios;

const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

const Anuncio = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  color: var(--branca);
  margin: 24px;
  background-color: var(--preta);
  border: 1px solid var(--primaria);
  border-radius: 8px;
  padding: 16px;
  img {
    width: 100%;
    margin: 24px 0;
  }
  h2,
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  footer {
    display: flex;
    flex-direction: column;
  }
`;

const anunciosMock = [
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
  {
    nome: "Thiago Menezes de Oliveira",
    id: "thiago-1",
    comprovante: "/exemple2.jpg",
  },
];
