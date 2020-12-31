import styled from "styled-components";
import { Map } from "react-leaflet";
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;

  margin: 8px 0;

  span {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const MapContainer = styled(Map)`
  width: 100%;
  height: 500px;
`;
