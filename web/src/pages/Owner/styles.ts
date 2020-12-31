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
  width: 80%;
  height: auto;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3.2rem;
    margin: 24px 0;
  }
`;

export const Fields = styled.ul`
  flex: 1;
  list-style: none;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  padding-bottom: 24px;

  grid-gap: 24px;
`;

export const FieldItem = styled.li`
  box-shadow: 6px 2px 16px 0px rgba(136, 165, 191, 0.48),
    -6px -2px 16px 0px rgba(255, 255, 255, 0.8);

  width: 100%;

  padding: 8px;
  min-height: 280px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      cursor: pointer;
      color: #034c26;
    }
  }

  div svg:first-of-type {
    color: #c53030;
    margin-right: 4px;
  }

  h1 {
    font-size: 1.6rem;
    color: #034c26;
    margin: 0;

    margin-top: 8px;
  }

  span {
    font-size: 2rem;
    color: #666666;
  }
`;
