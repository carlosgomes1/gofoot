import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 10vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderDiv = styled.header`
  position: absolute;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  img {
    margin-top: 24px;

    width: 200px;
  }
`;

export const Navbar = styled.nav`
  width: 30%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItem = styled(Link)`
  font-size: 2rem;

  color: #eaeaea;
  text-decoration: none;

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #034c26;
  }
`;

export const Divisor = styled.div`
  width: 1.6px;
  height: 3rem;

  background-color: #eaeaea;
`;
