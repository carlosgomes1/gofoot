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
  flex: 1;
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 2.4rem;
    font-size: 3.2rem;
  }

  p {
    margin: 0.8rem 0;

    font-size: 1.5rem;

    span {
      font-weight: 500;
      font-size: 1.6rem;

      color: #037e3f;
    }
  }
`;

export const ImageSVG = styled.img`
  width: 100%;
  max-width: 60rem;

  align-self: flex-end;
  padding: 2.4rem;
`;
