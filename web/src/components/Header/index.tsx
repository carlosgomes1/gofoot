import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import Logo from "../../assets/images/logo.png";

import { Container, Content, Navbar, NavItem, Divisor } from "./styles";

const Header: React.FC = () => {
  const { owner, signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Content>
        {owner ? (
          <>
            <button type="button" onClick={handleSignOut}>
              <FiArrowLeft size={32} />
              Sair do app
            </button>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <Navbar>
              <NavItem to="/login">Login</NavItem>
              <Divisor />
              <NavItem to="/register">Cadastre-se</NavItem>
            </Navbar>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Header;
