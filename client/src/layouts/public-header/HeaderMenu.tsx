import { Link, NavLink } from 'react-router-dom';
import { Logo } from '~/components/logo';
import * as S from './public-header.style';

export const HeaderMenu = () => {
  return (
    <S.Menu>
      <Link to={'/home'} className="home-link">
        <Logo />
      </Link>
      <S.List>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
      </S.List>
    </S.Menu>
  );
};
