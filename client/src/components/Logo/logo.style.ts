import styled from 'styled-components';

export const SLogo = styled.h2`
  font-size: 4rem;
  font-family: 'Dancing Script', cursive;

  span {
    color: ${({ theme: { colors } }) => colors.emphasize};
  }
`;
