import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 80px;
  height: 80px;

  margin: 24px auto;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #037e3f;
    border-color: #037e3f transparent #037e3f transparent;
    animation: ${loading} 1.2s linear infinite;
  }
`;
