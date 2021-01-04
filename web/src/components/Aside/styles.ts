import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface AsideProps {
  selected: boolean;
}

export const Container = styled.div`
  height: auto;

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AsideItem = styled(Link)<AsideProps>`
  height: 60px;

  text-decoration: none;

  color: #312e38;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 8px;

  span {
    font-size: 2rem;
    font-weight: 500;
  }

  cursor: pointer;

  &:hover {
    background-color: #b9ead1;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: #b9ead1;

      &::before {
        content: "";
        height: 100%;
        width: 3px;
        background-color: #037e3f;
        position: relative;
        left: -8px;
      }
    `}
`;
