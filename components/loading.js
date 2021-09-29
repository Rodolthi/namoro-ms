import styled, { keyframes } from "styled-components";
import Icone from "./icone"

const Loading = ({ carregando }) => {
  return (
    <Container className={carregando && "carregamentoAtivo"}>
      <Icone nome="autorenew" />
    </Container>
  )
}

export default Loading

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  40% {
    transform: rotate(100deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  &.carregamentoAtivo {
    display: flex;
  }
  .material-icons-round {
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height: 40px;
    font-size: 40px;
    color: var(--primaria);
    animation: ${rotate} 1s linear infinite;
  }
`