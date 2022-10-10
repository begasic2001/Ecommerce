import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

// Slideshow wrapper components CSS
export const Slideshow = styled.section`
  position: relative;
  height: 100%;

  .slideshow__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
  }
`;

// Image child components CSS
export const Img = styled.section`
  height: calc(100vh / 2);

  .slideshow__img {
    ${m.boxSize('100%')}

    display: block;
    object-fit: cover;
    object-position: top center;
  }
`;

// Content child components CSS
export const Content = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  left: 10%;

  .slideshow__desc {
    margin-top: 2rem;
    max-width: 50%;
    color: #555;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  .slideshow__title {
    max-width: 50%;
    font-size: 6rem;
    font-family: 'Source Serif Pro', serif;
    font-weight: 400;
  }

  .slideshow__emphasize {
    color: ${({ theme: { colors } }) => colors.emphasize};
  }
`;
