import React from "react";

import { Container, Content } from "./styles";

import Header from "../../components/Header";
import Aside from "../../components/Aside";

const Responsible: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Aside selected="responsible" />
      </Content>
    </Container>
  );
};

export default Responsible;
