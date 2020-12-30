import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1.8px solid #312e38;

  margin: 2px 0;

  display: flex;
  align-items: center;

  padding: 10px;
  border-radius: 8px;

  width: 100%;

  svg {
    color: #312e38;
    margin-right: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: #037e3f;
      }
      border: 2px solid #037e3f;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #037e3f;
      }
    `}

  input {
    border: 0;
    background-color: transparent;

    font-weight: 500;
    font-size: 1.8rem;

    &::placeholder {
      color: #312e38;
    }
  }
`;
