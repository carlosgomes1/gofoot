import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #034c26;

  margin: 2px 0;

  display: flex;
  align-items: center;

  padding: 10px;
  border-radius: 8px;

  width: 100%;

  svg {
    color: #034c26;
    margin-right: 8px;
  }

  input {
    border: 0;
    background-color: transparent;

    font-weight: 500;
    font-size: 1.8rem;

    &::placeholder {
      color: #034c26;
    }
  }
`;
