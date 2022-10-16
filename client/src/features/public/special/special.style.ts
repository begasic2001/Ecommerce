import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const Special = styled.section`
  margin-top: 8rem;
  background-color: ${({ theme: { colors } }) => colors.third};
`;

export const Content = styled.div`
  ${m.flexBox('space-between', 'center')}
  margin: 0 auto;
  padding: 10rem 0;
  width: 70%;
`;

export const Img = styled.section`
  flex-basis: 45%;
  width: 45%;

  img {
    ${m.boxSize('100%')}
    display: block;
  }
`;

export const Announce = styled.section`
  flex-basis: 50%;
  width: 50%;

  h3 {
    font: 400 4rem 'Source Serif Pro', serif;
    line-height: 1.4;
  }

  span {
    margin-top: 2.5rem;
    color: #f00;
    font-weight: 600;
  }

  p {
    color: ${({ theme: { colors } }) => colors.secondaryText};
  }
`;

export const AnnounceList = styled.ul`
  margin-top: 2.5rem;
  margin-left: 2rem;
  font-size: 1.8rem;

  li {
    color: ${({ theme: { colors } }) => colors.secondaryText};
    list-style-image: url('https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png');

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;
