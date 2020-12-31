import React from "react";
import { FiFrown } from "react-icons/fi";

import { Container, Content } from "./styles";

import Header from "../../components/Header";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h1>
          Olá, parece que que você está tentando acessar uma página que não
          existe, volte para a página principal clicando no ícone do gofoot.
        </h1>
        <FiFrown size={80} />
      </Content>
    </Container>
  );
};

export default NotFound;
