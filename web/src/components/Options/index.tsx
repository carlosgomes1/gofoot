import React from "react";
import { FiPlus, FiSettings } from "react-icons/fi";
import { FaFutbol } from "react-icons/fa";

import { Container, OptionsItem, Content } from "./styles";

interface OptionsProps {
  selected: string;
}

const Options: React.FC<OptionsProps> = ({ selected }) => {
  return (
    <Container>
      <Content>
        <OptionsItem selected={selected === "owner"} to="/">
          <FaFutbol size={56} />
          <span>Meus campos</span>
        </OptionsItem>
        <OptionsItem selected={selected === "new"} to="/new">
          <FiPlus size={56} />
          <span>Novo campo</span>
        </OptionsItem>
        <OptionsItem selected={selected === "config"} to="/">
          <FiSettings size={56} />
          <span>Configurações</span>
        </OptionsItem>
      </Content>
    </Container>
  );
};

export default Options;
