import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

// Footer main part components CSS
export const Footer = styled.footer`
  margin-top: 5rem;
  background-color: ${({ theme: { colors } }) => colors.secondary};
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 70%;
  color: #aaa;
`;

export const Link = styled.section`
  ${m.flexBox('space-between')}
  padding: 5rem 0;
  border-bottom: solid 1px #ccc;
`;

export const Info = styled.section`
  ${m.flexBox('space-between', 'center')}
  padding: 2rem 0;
  font-size: 1.2rem;
`;

// Link child components CSS
export const LinkTitle = styled.p`
  color: #000;

  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const LinkList = styled.ul`
  margin-top: 2rem;

  li {
    list-style-type: none;
    margin-top: 1rem;

    &:hover {
      cursor: pointer;
      color: #888;
    }
  }
`;

// Info child components CSS
export const InfoPayment = styled.section`
  img:last-child {
    margin-left: 1rem;
  }
`;

export const InfoSocial = styled.section`
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
`;