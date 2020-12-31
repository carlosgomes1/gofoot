import React from "react";

import Header from "../../components/Header";
import Options from "../../components/Options";

import { Container, Content } from "./styles";

const Owner: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Options selected="owner" />
      </Content>
    </Container>
  );
};

export default Owner;
