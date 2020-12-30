import styled from "styled-components";

import WaveSVG from "../../assets/images/wave.svg";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${WaveSVG}) no-repeat;
  background-position-y: -16px;
`;

export const Content = styled.div`
  margin: auto;

  display: flex;
  align-items: center;

  div {
    h1 {
      margin-top: auto;
      font-size: 3.6rem;

      color: #034c26;

      margin-bottom: 8px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        background-color: #034c26;
        color: #eaeaea;

        padding: 10px;
        margin-top: 8px;

        width: 100%;
        font-size: 1.8rem;

        border-radius: 8px;
        border: 0;

        transition: background-color 0.3s;

        &:hover {
          background-color: #01381b;
        }
      }
    }
  }
`;
