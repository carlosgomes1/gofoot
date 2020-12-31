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

  button {
    font-size: 2.4rem;
    color: #eaeaea;
    background-color: transparent;
    border: 0;

    display: flex;
    align-items: center;

    transition: box-shadow 0.2s;

    padding: 8px;

    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 4px 6px -2px rgba(0, 0, 0, 0.05);

    svg {
      margin-right: 8px;
    }

    cursor: pointer;
  }

  button:hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.25),
      0px 4px 6px -2px rgba(0, 0, 0, 0.15);
  }

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
