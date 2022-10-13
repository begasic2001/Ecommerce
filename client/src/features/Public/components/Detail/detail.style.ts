import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const Detail = styled.section`
  margin-top: 5rem;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export const Product = styled.section`
  ${m.flexBox('space-between')}
`;

export const Gallery = styled.section`
  ${m.flexBox('space-between')}
  flex-basis: 40%;
  width: 40%;
`;

export const GalleryList = styled.section`
  flex-basis: 25%;
  width: 25%;
`;

export const GalleryListItem = styled.div`
  & + & {
    margin-top: 2rem;
  }

  img {
    ${m.boxSize('100%')}
    display: block;
  }
`;

export const GallerySpecific = styled.div`
  flex-basis: 70%;
  width: 70%;

  img {
    ${m.boxSize('100%', '50rem')}
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;

export const Summary = styled.section`
  flex-basis: 70%;
  width: 70%;
`;

export const Description = styled.section``;
