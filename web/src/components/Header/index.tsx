import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { Container, Content, Navbar, NavItem, Divisor } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navbar>
          <NavItem to="/login">Login</NavItem>
          <Divisor />
          <NavItem to="/register">Cadastre-se</NavItem>
        </Navbar>
      </Content>
    </Container>
  );
};

export default Header;
