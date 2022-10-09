import styled, { createGlobalStyle } from 'styled-components';
import { External, Internal } from './reset.style';

export const GlobalStyle = createGlobalStyle`
  ${External}
  ${Internal}
`;

export const Wrapper = styled.section`
  max-width: 100vw;
  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
`;
