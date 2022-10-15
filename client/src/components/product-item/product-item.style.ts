import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const ProductImg = styled.section`
  img {
    ${m.boxSize('100%', '20rem')}
    display: block;
    object-fit: cover;
    object-position: center;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const ProductItem = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 35rem;
  box-shadow: 0 0 0.5rem #eee;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover ${ProductImg} {
    transform: scale(1.1);
  }

  .item__name {
    margin-top: auto;
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
  }

  .item__price {
    margin-top: 3rem;
    text-align: center;
  }
`;
