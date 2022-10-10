import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

// Hot sale wrapper components CSS
export const HotSale = styled.section``;

export const Content = styled.div`
  width: 70%;
  margin: 5rem auto 0;

  .hot-sale__title {
    padding-bottom: 1rem;
    border-bottom: solid 1px #eee;
    font: 400 3.5rem 'Source Serif Pro', serif;
  }

  .hot-sale__flex-between {
    ${m.flexBox('space-between')}
    margin-top: 3rem;
  }
`;

// Big sale product components CSS
export const HotBig = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  box-shadow: 0 0 1rem #eee;
  flex-basis: 30%;
  width: 30%;
  min-height: 70rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover .big__img {
    transform: scale(1.1);
  }

  .big__img {
    ${m.boxSize('100%', '50rem')}
    display: block;
    object-fit: cover;
    object-position: center;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const HotBigInfo = styled.section`
  ${m.flexBox('space-between', 'baseline')}
  margin-top: auto;

  .info__name {
    font-size: 2.5rem;
  }

  .info__price {
    color: #f00;
    font-size: 3rem;
    font-weight: bold;

    &--previous {
      margin-right: 1rem;
      color: #ccc;
      font-size: 2rem;
      font-weight: 400;
      text-decoration: line-through 1px #ccc;
    }
  }
`;

export const HotBigRemain = styled.section`
  ${m.flexBox('space-between', 'baseline')}
  margin-top: 3rem;

  .remaining__txt {
    font-size: 2rem;
  }

  .remaining__time {
    font-size: 3.5rem;
  }
`;

// Other sale products components CSS
export const HotOther = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  flex-basis: 68%;
  width: 68%;
`;
