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

export const HeaderSearchFunctionBtn = styled.button`
  ${m.flexCenter()}
  ${m.boxSize('3.5rem', '100%')}

  &:hover {
    cursor: pointer;
  }
`;

// Specific components CSS
export const SHeader = {
  Cover: styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    box-shadow: ${({ isScrollPage }) => (isScrollPage ? '0 0.2rem 0.5rem #eee' : 'none')};
    transition: box-shadow ${({ theme }) => theme.transition};
  `,
  Content: styled.div`
    ${m.flexBox('space-between', 'center')}
    ${m.boxSize('85%', '10rem')}
    margin: 0 auto;

    .header_home-link {
      text-decoration: none;
      color: #000;
    }
  `,
  Menu: styled(HeaderMainPart)``,
  Function: styled(HeaderMainPart)``,
};

export const SNav = {
  Cover: styled.nav`
    margin-left: 2rem;

    .nav_item {
      margin-left: 2rem;
      color: #000;
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;

      &--active {
        color: #787878;
        font-weight: bold;
        text-decoration: underline solid 1px #787878;
      }
    }
  `,
};

export const SSearch = {
  Cover: styled.section`
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
  `,
  Btn: styled(HeaderSearchFunctionBtn)``,
  Input: styled.input`
    height: 100%;
    animation: ${AnimationSliderInput} 0.5s;
  `,
  Del: styled(HeaderSearchFunctionBtn)`
    animation: ${AnimationSliderInput} 0.5s;

    .del-svg {
      stroke: ${({ hasValue }) => (hasValue ? '#000' : '#ccc')};
    }
  `,
};

export const SUser = {
  Cover: styled.section`
    position: relative;
    margin-left: 2rem;

    .user-svg {
      stroke: #555;
    }
  `,
  LogBox: styled.section`
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

    .user_log {
      ${m.flexCenter('ver')}
      padding: 2rem 1rem;
      text-decoration: none;
      color: #000;
    }

    span {
      margin-left: 1rem;
    }
  `,
};
