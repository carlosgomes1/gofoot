import React from "react";

import { Container, AsideItem } from "./styles";

interface AsideProps {
  selected: string;
}

const Aside: React.FC<AsideProps> = ({ selected }) => {
  return (
    <Container>
      <AsideItem selected={selected === "field"}>
        <span>Campo</span>
      </AsideItem>
      <AsideItem selected={selected === "responsible"}>
        <span>Responsáveis</span>
      </AsideItem>
      <AsideItem selected={selected === "newResponsible"}>
        <span>Novo responsável</span>
      </AsideItem>
    </Container>
  );
};

export default Aside;
