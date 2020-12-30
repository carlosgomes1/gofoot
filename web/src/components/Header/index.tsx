import React from "react";

import Logo from "../../assets/images/logo.png";

import { Container, Content, Navbar, NavItem, Divisor } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />
        <Navbar>
          <NavItem to="/">Login</NavItem>
          <Divisor />
          <NavItem to="/register">Cadastre-se</NavItem>
        </Navbar>
      </Content>
    </Container>
  );
};

export default Header;
