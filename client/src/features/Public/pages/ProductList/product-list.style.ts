import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const Products = styled.section`
  margin-top: 5rem;
`;

export const Content = styled.div`
  ${m.flexBox('space-between')}
  width: 70%;
  margin: 0 auto;
`;

export const Filter = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  width: 25%;
`;

export const FilterTitle = styled.div`
  ${m.flexCenter()}

  .filter__title {
    margin-left: 1.5rem;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const FilterBox = styled.section`
  margin-top: 3rem;

  .filter-box__title {
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
  }
`;

export const FilterItem = styled.div`
  ${m.flexBox('space-between', 'center')}
  position: relative;
  margin-top: 2rem;
  font-size: 1.6rem;

  .filter-item__input {
    display: none;

    &:checked ~ .check-svg {
      display: block;
    }
  }

  .filter-item__input-custom {
    ${m.boxSize('2rem')}

    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
    border-radius: 0.5rem;
    border: solid 2px #cccaca;
    transform: translateY(-50%);
  }

  .check-svg {
    display: none;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

export const FilterPrice = styled.div`
  ${m.flexBox('space-between', 'center')}
  margin-top: 2rem;

  .filter-price__divided {
    ${m.boxSize('1rem', '2px')}
    background-color: #000;
  }

  .filter-price__input {
    padding: 0.5rem;
    border: solid 1px #aaa;
    border-radius: 0.2rem;
    width: 43%;
    transition: ${({ theme }) => theme.transition};

    &:focus {
      border-color: #000;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;

export const List = styled.section`
  flex-basis: 70%;
  width: 70%;

  .list__title {
    font-size: 3.5rem;
    font-weight: bold;
  }
`;

export const ListProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;
`;
