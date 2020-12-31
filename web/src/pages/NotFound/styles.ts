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
  flex-direction: column;

  width: 100%;
  max-width: 800px;

  align-items: center;

  h1 {
    font-size: 3.6rem;

    text-align: justify;
  }

  svg {
    color: #037e3f;
    margin-top: 36px;
  }
`;
