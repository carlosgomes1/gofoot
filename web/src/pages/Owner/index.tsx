import React from "react";

import Header from "../../components/Header";

import { Container } from "./styles";

const Owner: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1> Hello to Owners! </h1>
    </Container>
  );
};

export default Owner;
