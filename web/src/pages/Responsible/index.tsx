import React from "react";

import { Container, Content } from "./styles";

import { useField } from "../../hooks/field";

import Header from "../../components/Header";
import Aside from "../../components/Aside";

const Responsible: React.FC = () => {
  const { field } = useField();

  return (
    <Container>
      <Header />
      <Content>
        <Aside selected="responsible" />
        {field.responsibles.map((responsible) => (
          <h1 key={responsible.name}>{responsible.name}</h1>
        ))}
      </Content>
    </Container>
  );
};

export default Responsible;
