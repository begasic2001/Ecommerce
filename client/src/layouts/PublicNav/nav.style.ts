import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

export const Nav = styled.nav`
  ${m.flexCenter('hor')}
  margin-top: 10rem;
  border-top: solid 1px #eee;
`;

export const Content = styled.div`
  margin-left: -5rem;
  padding: 2rem 0;
  width: 70%;

  span {
    margin-left: 5rem;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      color: #787878;
    }
  }
`;
