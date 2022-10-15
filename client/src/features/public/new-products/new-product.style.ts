import styled from 'styled-components';

export const NewProduct = styled.section`
  margin-top: 8rem;
`;

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;

  h3 {
    padding-bottom: 1rem;
    border-bottom: solid 1px #eee;
    font: 400 3.5rem 'Source Serif Pro', serif;
  }
`;

export const Slideshow = styled.div`
  margin-top: 3rem;

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #fff;
  }
`;
