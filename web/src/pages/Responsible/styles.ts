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
  display: flex;
  align-items: center;
  flex: 1;

  width: 80%;
`;

export const Contacts = styled.ul`
  flex: 1;

  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-gap: 16px;

  padding: 0 16px;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  width: 100%;
  height: 100%;

  box-shadow: 3px 3px 6px 0px #ccdbe8 inset,
    -3px -3px 6px 1px rgba(255, 255, 255, 0.5) inset;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;

  align-self: flex-start;

  margin: 1px 0;

  strong {
    font-size: 1.6rem;
    margin-left: 8px;
  }

  svg {
    margin-right: 8px;
  }
`;

export const HeaderContact = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-bottom: 4px;

  width: 100%;

  svg {
    color: #037e3f;
    cursor: pointer;

    transition: color 0.3s;
  }

  svg:hover {
    color: #01381b;
  }

  h1 {
    font-weight: 500;
    font-size: 2.4rem;
  }
`;
