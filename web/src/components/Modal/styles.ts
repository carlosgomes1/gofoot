import styled, { keyframes } from "styled-components";

const modal = keyframes`
  0% {
    transform:scale(0);
    opacity: 0;
  }
  100% {
    transform:scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;

  width: 400px;
  height: auto;

  padding: 16px;

  background-color: #eaeaea;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  right: 24px;
  top: 24px;

  animation: ${modal} 1s;

  p {
    font-size: 2rem;
    h1 {
      font-size: 2rem;
      display: inline;

      color: #c53030;
    }
  }

  div {
    margin-top: 16px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      color: #16dd16;
      cursor: pointer;

      transition: color 0.3s;
    }

    svg:hover {
      color: #05af19;
    }

    svg:first-of-type {
      color: #c53030;
    }

    svg:first-of-type:hover {
      color: #842222;
    }
  }
`;
