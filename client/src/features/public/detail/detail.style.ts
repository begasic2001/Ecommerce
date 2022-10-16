import styled, { css } from 'styled-components';
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
  width: 40px;
`;

export const GalleryList = styled.section`
  flex-basis: 25%;
  width: 25%;

  .swiper {
    height: 45rem;
  }
`;

export const GalleryListItem = styled.div`
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: solid 3px #6f76f7;
    `}

  &:hover {
    cursor: pointer;
  }

  img {
    ${m.boxSize('100%')}
    display: block;
  }
`;

export const GallerySpec = styled.div`
  flex-basis: 70%;
  width: 70%;

  img {
    ${m.boxSize('100%', '45rem')}
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;

export const Summary = styled.section`
  flex-basis: 55%;
  width: 55%;

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  button {
    margin-top: 4rem;
    border: none;
    min-height: 5rem;
    min-width: 20rem;
    background-color: #000;
    color: #fff;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      cursor: pointer;
      background-color: ${({ theme: { colors } }) => colors.secondary};
      color: #000;
    }
  }
`;

export const SummaryTable = styled.table`
  margin-top: 2rem;
  width: 100%;
  text-align: left;

  th {
    padding: 1.5rem 0;
    font-weight: 400;
    width: 20%;
  }

  tr.summary__price {
    background-color: #fafafa;

    td {
      color: #f00;
      font-size: 3.5rem;
    }

    span {
      margin-right: 1.5rem;
      color: ${({ theme: { colors } }) => colors.secondaryText};
      font-size: 2rem;
      text-decoration: line-through 1px ${({ theme: { colors } }) => colors.secondaryText};
    }
  }

  td {
    padding: 1.5rem 2rem;
    font-size: 1.6rem;

    &.summary__code {
      font-style: italic;
      color: ${({ theme: { colors } }) => colors.secondaryText};
    }

    &.summary__quantity {
      ${m.flexCenter('ver')}

      & .summary__input {
        ${m.flexCenter('ver')}
        padding: 0 0.5rem;
        border: solid 2px ${({ theme: { colors } }) => colors.border};
        width: 30%;
      }

      input {
        margin: 0 0.5rem;
        padding: 0.5rem;
        border: none;
        border-left: solid 2px ${({ theme: { colors } }) => colors.border};
        border-right: solid 2px ${({ theme: { colors } }) => colors.border};
        width: 50%;
        font-size: 1.3rem;
        text-align: center;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      p {
        margin-left: 1.5rem;
        color: ${({ theme: { colors } }) => colors.secondaryText};
        font-style: italic;
        font-size: 1.2rem;
      }
    }
  }

  .summary-quantity__btn {
    ${m.flexCenter()}
  }
`;

export const Desc = styled.section`
  margin-top: 8rem;
`;

export const DescTab = styled.section`
  border-bottom: solid 2px #000;

  span {
    display: inline-block;
    padding: 1.5rem 2.5rem;
    font-size: 1.6rem;

    &:hover {
      cursor: pointer;
    }

    &:not(:last-child) {
      border-right: none;
    }

    &.tab__selected {
      background-color: #ccc;
      font-weight: 600;
    }
  }
`;

export const DescContent = styled.section`
  margin-top: 2.5rem;
  padding: 1rem;

  h3 {
    padding: 1.5rem 2rem;
    background-color: #fafafa;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  h4 {
    margin: 1rem 0;
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  p {
    text-align: justify;
    line-height: 1.6;
  }

  ul {
    margin-top: 2rem;
    margin-left: 1.5rem;

    li {
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`;

export const DescTable = styled.table`
  width: 100%;
  text-align: left;

  th {
    padding: 1.5rem 0;
    font-weight: 400;
    width: 20%;
  }
`;
