import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

interface NavLinkItemProps {
  path: string;
  children: string;
}

function Nav() {
  return (
    <nav className="ml-20">
      <NavLinkItem path="/home">Trang chủ</NavLinkItem>
      <NavLinkItem path="/products">Sản phẩm</NavLinkItem>
      <NavLinkItem path="/blog">Blog</NavLinkItem>
    </nav>
  );
}

const NavLinkItem = ({ path, children }: NavLinkItemProps) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      clsx('ml-20 text-16 no-underline', {
        'font-bold text-txt-2': isActive,
      })
    }
  >
    {children}
  </NavLink>
);

export { Nav };
