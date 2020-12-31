import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 50rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

export const OptionsItem = styled(Link)<ItemProps>`
  height: 12rem;
  width: 12rem;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #eaeaea;

  ${(props) =>
    props.selected &&
    css`
      border: 2px solid #01381b;
    `}

  text-decoration: none;

  color: #034c26;

  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  span {
    margin-top: 16px;

    font-size: 1.6rem;
    font-weight: 500;
  }

  &:hover {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.45);
  }
`;
