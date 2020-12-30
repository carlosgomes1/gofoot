import styled from "styled-components";

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
  width: 80%;
`;

export const Navbar = styled.nav`
  width: 30%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItem = styled.h1`
  font-size: 2rem;

  color: #eaeaea;
`;

export const Divisor = styled.div`
  width: 1.6px;
  height: 3rem;

  background-color: #eaeaea;
`;
