import React from "react";

import { Container, Content, Navbar, NavItem, Divisor } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Hello, World!</h1>
        <Navbar>
          <NavItem>Login</NavItem>
          <Divisor />
          <NavItem>Cadastre-se</NavItem>
        </Navbar>
      </Content>
    </Container>
  );
};

export default Header;
