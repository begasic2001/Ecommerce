import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const ProductItem = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 35rem;
  box-shadow: 0 0 1rem #eee;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover .product-item__img {
    transform: scale(1.1);
  }

  .product-item__img {
    ${m.boxSize('100%', '20rem')}
    display: block;
    object-fit: cover;
    object-position: center;
    transition: ${({ theme }) => theme.transition};
  }

  .product-item__name {
    margin-top: auto;
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
  }

  .product-item__price {
    margin-top: 3rem;
    text-align: center;
  }
`;
