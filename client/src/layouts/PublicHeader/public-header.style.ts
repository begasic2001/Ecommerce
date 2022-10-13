import styled, { css, keyframes } from 'styled-components';
import * as m from '~/styles/mixins.style';

// Animation
export const AnimationSliderInput = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Reuse components CSS
export const HeaderMainPart = styled.section`
  ${m.flexCenter('ver')}
`;

// Header main part components CSS
export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  box-shadow: ${({ isScrollPage }) => (isScrollPage ? '0 0.2rem 0.2rem #eee' : 'none')};
  background-color: #fff;
  transition: box-shadow ${({ theme }) => theme.transition};
`;

export const Content = styled.div`
  ${m.flexBox('space-between', 'center')}
  ${m.boxSize('70%', '10rem')}
  margin: 0 auto;
`;

// Menu child components CSS
export const Menu = styled(HeaderMainPart)`
  .home-link {
    text-decoration: none;
    color: #000;
  }
`;

export const List = styled.section`
  margin-left: 2rem;

  a {
    margin-left: 2rem;
    color: #000;
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;

    &.active {
      color: #787878;
      font-weight: bold;
      text-decoration: underline solid 1px #787878;
    }
  }
`;

// Function child components CSS
export const Function = styled(HeaderMainPart)``;

export const Search = styled.section`
  ${({ isShowSearch, theme: { colors } }) =>
    isShowSearch
      ? css`
          width: 25rem;
          border: solid 1px ${colors.border};
        `
      : css`
          width: 4rem;
          border: none;
        `};
  ${m.flexCenter('ver')}

  padding: 0.25rem;
  height: 4rem;
  background-color: #fff;
  transition: ${({ theme }) => theme.transition};

  .search__btn {
    ${m.flexCenter()}
    ${m.boxSize('3.5rem', '100%')}

    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    border: none;
    height: 100%;
    animation: ${AnimationSliderInput} 0.5s;
  }
`;

export const SearchDel = styled.button`
  ${m.flexCenter()}
  ${m.boxSize('3.5rem', '100%')}

  border: none;
  animation: ${AnimationSliderInput} 0.5s;

  &:hover {
    cursor: pointer;
  }

  .del-svg {
    stroke: ${({ hasValue }) => (hasValue ? '#000' : '#ccc')};
  }
`;

export const User = styled.section`
  position: relative;
  margin-left: 2rem;

  .user-svg {
    stroke: #555;
  }
`;

export const UserLogBox = styled.section`
  ${({ isOpenUserLog }) =>
    isOpenUserLog
      ? css`
          opacity: 1;
          transform: scale(1);
        `
      : css`
          opacity: 0;
          transform: scale(0);
        `}

  position: absolute;
  top: 160%;
  right: -50%;
  box-shadow: 0 0 0.5rem #ccc;
  min-width: 12rem;
  background-color: #fff;
  transform-origin: top center;
  transition: ${({ theme }) => theme.transition};

  &::after {
    ${m.boxSize('1.5rem')}
    content: '';
    position: absolute;
    top: 0;
    right: 20%;
    box-shadow: -0.2rem -0.2rem 0.2rem #eee;
    background-color: #fff;
    transform: translateY(-50%) rotate(45deg);
  }

  a {
    ${m.flexCenter('ver')}
    padding: 2rem 1rem;
    text-decoration: none;
    color: #000;
  }

  span {
    margin-left: 1rem;
  }
`;
