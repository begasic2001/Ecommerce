import { NavLink } from 'react-router-dom';
import { navLink } from '../data';
import s from '../menu.module.scss';

export function Nav() {
  return (
    <nav className={s.nav}>
      {navLink.map((item) => (
        <NavLink key={item.id} to={item.path} className={s['nav__item']}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
