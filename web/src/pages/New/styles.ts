import styled from "styled-components";
import { Form } from "@unform/web";

import WaveSVG from "../../assets/images/wave.svg";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${WaveSVG}) no-repeat;
  background-position-y: -16px;
`;

export const Content = styled(Form)`
  flex: 1;

  margin-top: 24px;

  width: 50%;

  padding-bottom: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background-color: #034c26;
    color: #eaeaea;

    padding: 10px;
    margin-top: 8px;

    width: 100%;
    max-width: 60%;
    font-size: 1.8rem;

    border-radius: 8px;
    border: 0;

    transition: background-color 0.3s;

    &:hover {
      background-color: #01381b;
    }
  }
`;

export const DoubleInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 48%;

  margin: 8px 0;

  span {
    font-size: 2rem;
    font-weight: 500;

    display: flex;

    h4 {
      margin-left: 8px;

      font-weight: 500;
      color: #c53030;
    }
  }
`;
