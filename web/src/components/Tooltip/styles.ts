import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  text-align: center;

  span {
    background-color: #037e3f;
    color: #eaeaea;

    padding: 8px;
    border-radius: 4px;

    font-size: 1.4rem;
    font-weight: 500;

    opacity: 0;
    visibility: hidden;

    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    width: 170px;

    &::before {
      content: "";
      border-style: solid;
      border-color: #037e3f transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      bottom: 20px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
