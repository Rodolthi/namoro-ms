import React from "react";
import styled from "styled-components";
import Icone from "../../../components/icone";
import lerURI from "./lerURI";

const UploadDeImagens = ({ imagensGaleria, imagemPrincipal, setImagensGaleria, setImagemPrincipal }) => {
  const handleImages = (e) => {
    lerURI(e).then((images) => {
      setImagensGaleria(images);
    });
  };

  const handleImagemPrincipal = (e) => {
    lerURI(e).then((imagem) => {
      setImagemPrincipal(imagem);
    });
  };

  const deletarImagemDaGaleria = (index) => {
    setImagensGaleria(
      imagensGaleria.filter((item) => imagensGaleria.indexOf(item) !== index)
    );
  };

  return (
    <Formulario>
      <Titulo>Dados do anunciante</Titulo>
      <input
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        type="file"
        id="imagens-galeria"
        multiple
        onChange={(e) => handleImages(e)}
      />
      <BotaoDeUpload htmlFor="imagens-galeria">
        Selecione as imagens da galeria
      </BotaoDeUpload>
      {imagensGaleria.length && imagensGaleria ? (
        <ImagensParaGaleria>
          {imagensGaleria.map((imagem, index) => {
            return (
              <ContainerImagem key={index}>
                <Imagem src={imagem} />
                <BotaoExcluirImagem
                  type="button"
                  onClick={() => deletarImagemDaGaleria(index)}
                >
                  <Icone nome="clear" />
                </BotaoExcluirImagem>
              </ContainerImagem>
            );
          })}
        </ImagensParaGaleria>
      ) : (
        ""
      )}
      <input
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        type="file"
        id="imagem-principal"
        onChange={(e) => handleImagemPrincipal(e)}
      />
      <BotaoDeUpload htmlFor="imagem-principal">
        Selecione uma imagem para destaque
      </BotaoDeUpload>
      {imagemPrincipal.length ? (
        <ContainerImagem>
          <Imagem src={imagemPrincipal[0]} />
        </ContainerImagem>
      ) : (
        ""
      )}
    </Formulario>
  );
};

export default UploadDeImagens

const Formulario = styled.form`
  background: #000;
  width: 100%;
  margin-bottom: 24px;
`;

const Titulo = styled.h2`
  font-size: 24px;
  color: white;
`;
const ImagensParaGaleria = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  width: 100%;
  flex-wrap: wrap;
  margin: 24px 0;
`;

const Imagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BotaoDeUpload = styled.label`
  border: 2px solid #fac045;
  width: 100%;
  height: 80px;
  font-family: "proxima-nova" sans-serif;
  color: #fac045;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 0 16px;
  text-align: center;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: translate(0, -1px);
  }
`;

const ContainerImagem = styled.div`
  position: relative;
  max-width: 320px;
  margin: 16px;
`;

const BotaoExcluirImagem = styled.button`
  position: absolute;
  right: -8px;
  top: -8px;
  color: black;
  background-color: #fac045;
  border-radius: 100px;
  padding: 8px;
  font-size: 10px;
  border: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: translate(0, -1px);
  }
`;
