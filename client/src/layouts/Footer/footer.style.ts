import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const SFooter = {
  Cover: styled.footer`
    margin-top: 5rem;
    background-color: ${({ theme: { colors } }) => colors.secondary};
  `,
  Content: styled.div`
    width: 70%;
    margin: 0 auto;
    color: #aaa;
  `,
};

export const SLink = {
  Cover: styled.section`
    ${m.flexBox('space-between')}
    padding: 5rem 0;
    border-bottom: solid 1px #ccc;
  `,
  Title: styled.p`
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  `,
  List: styled.ul`
    margin-top: 2rem;

    li {
      list-style-type: none;
      margin-top: 1rem;

      &:hover {
        cursor: pointer;
        color: #888;
      }
    }
  `,
};

export const SInfo = {
  Cover: styled.section`
    ${m.flexBox('space-between', 'center')}
    padding: 2rem 0;
    font-size: 1.2rem;
  `,
  Payment: styled.section`
    img:last-child {
      margin-left: 1rem;
    }
  `,
  Social: styled.section`
    span {
      text-transform: uppercase;

      &:last-child {
        margin-left: 1rem;
      }

      &:hover {
        cursor: pointer;
        color: #888;
      }
    }
  `,
};
