import styled, { css, keyframes } from "styled-components";
import { Form } from "@unform/web";

import WaveSVG from "../../assets/images/wave.svg";

interface ContainersProps {
  active: boolean;
}

const appear = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const Container = styled.div<ContainersProps>`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      opacity: 0.2;
    `}

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
    color: #c53030;
    cursor: pointer;

    transition: color 0.3s;

    &:hover {
      color: #7c2525;
    }
  }

  svg:first-of-type {
    color: #037e3f;
    cursor: pointer;

    transition: color 0.3s;

    &:hover {
      color: #01381b;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 2.4rem;
  }
`;

export const AddContainer = styled.div<ContainersProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  display: none;

  ${(props) =>
    props.active &&
    css`
      display: flex;
    `}

  align-items: center;
  justify-content: center;
`;

export const AddContent = styled(Form)`
  box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
    0px 8px 16px -8px rgba(0, 0, 0, 0.3),
    0px -6px 16px -6px rgba(0, 0, 0, 0.025);

  background-color: #fff;

  animation: ${appear} 0.4s;

  border-radius: 4px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 16px;

  h1 {
    margin: 8px 0;
  }

  select {
    border-radius: 8px;
    border: 1.8px solid #312e38;

    background-color: transparent;

    font-weight: 500;
    font-size: 1.8rem;

    flex: 1;
    width: 100%;
    min-width: 320px;

    padding: 10px;
    margin-bottom: 4px;
  }

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

  svg {
    align-self: flex-start;
    color: #c53030;
    cursor: pointer;

    margin-bottom: 16px;
  }
`;
