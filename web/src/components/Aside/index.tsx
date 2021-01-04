import React from "react";

import { Container, AsideItem } from "./styles";

interface AsideProps {
  selected: string;
}

const Aside: React.FC<AsideProps> = ({ selected }) => {
  return (
    <Container>
      <AsideItem to="/field" selected={selected === "field"}>
        <span>Campo</span>
      </AsideItem>
      <AsideItem to="/responsible" selected={selected === "responsible"}>
        <span>Responsáveis</span>
      </AsideItem>
      <AsideItem to="/newResponsible" selected={selected === "newResponsible"}>
        <span>Novo responsável</span>
      </AsideItem>
    </Container>
  );
};

export default Aside;
