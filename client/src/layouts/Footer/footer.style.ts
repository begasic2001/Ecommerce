import styled from 'styled-components';
import * as m from '~/styles/mixins.style';

// Footer main part components CSS
export const Footer = styled.footer`
  margin-top: 5rem;
  background-color: ${({ theme: { colors } }) => colors.secondary};

  .footer__content {
    margin: 0 auto;
    width: 70%;
    color: #aaa;
  }
`;

// Link child components CSS
export const Link = styled.section`
  ${m.flexBox('space-between')}
  padding: 5rem 0;
  border-bottom: solid 1px #ccc;

  .item__title {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
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
export const Info = styled.section`
  ${m.flexBox('space-between', 'center')}
  padding: 2rem 0;
  font-size: 1.2rem;
`;

export const InfoImg = styled.section`
  .img__paypal {
    margin-left: 1rem;
  }
`;

export const InfoSocial = styled.section`
  .social__txt {
    text-transform: uppercase;

    &--facebook {
      margin-left: 1rem;
    }

    &:hover {
      cursor: pointer;
      color: #888;
    }
  }
`;
