import { Link, NavLink } from 'react-router-dom';
import { Logo } from '~/components/Logo';
import { SHeader, SNav } from './public-header.style';

const HeaderMenu = () => {
  return (
    <SHeader.Menu>
      <Link to={'/'} className="header_home-link">
        <Logo />
      </Link>
      <SNav.Cover>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'nav_item nav_item--active' : 'nav_item')}
        >
          Home
        </NavLink>
        <NavLink
          to={'/products'}
          className={({ isActive }) => (isActive ? 'nav_item nav_item--active' : 'nav_item')}
        >
          Products
        </NavLink>
        <NavLink
          to={'/blog'}
          className={({ isActive }) => (isActive ? 'nav_item nav_item--active' : 'nav_item')}
        >
          Blog
        </NavLink>
      </SNav.Cover>
    </SHeader.Menu>
  );
};

export default HeaderMenu;
