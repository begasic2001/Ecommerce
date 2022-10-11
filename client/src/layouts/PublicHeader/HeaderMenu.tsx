import { Link, NavLink } from 'react-router-dom';
import { Logo } from '~/components/Logo';
import * as S from './public-header.style';

export const HeaderMenu = () => {
  return (
    <S.Menu>
      <Link to={'/'} className="menu_home-link">
        <Logo />
      </Link>
      <S.List>
        <NavLink to={'/'} className="list__item">
          Home
        </NavLink>
        <NavLink to={'/products'} className="list__item">
          Products
        </NavLink>
        <NavLink to={'/blog'} className="list__item">
          Blog
        </NavLink>
      </S.List>
    </S.Menu>
  );
};
