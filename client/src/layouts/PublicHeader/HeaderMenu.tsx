import { Link, NavLink } from 'react-router-dom';
import { Logo } from '~/components/Logo';
import * as S from './public-header.style';

const HeaderMenu = () => {
  return (
    <S.Menu>
      <Link to={'/'} className="menu_home-link">
        <Logo />
      </Link>
      <S.Nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
      </S.Nav>
    </S.Menu>
  );
};

export default HeaderMenu;
