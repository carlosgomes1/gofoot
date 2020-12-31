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
