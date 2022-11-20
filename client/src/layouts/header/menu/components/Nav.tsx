import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductListBySearch, toggleSearch } from '~/app/productSlice';
import s from '../menu.module.scss';

export function Nav() {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.product);

  const toggleDispatchSearchFalse = () => {
    const params = {
      _page: 1,
      _limit: 12,
    };
    const action: any = getProductListBySearch(params);
    dispatch(action);
    dispatch(toggleSearch(false));
  };

  return (
    <nav className={s.nav}>
      <NavLink to="/home" className={s.navItem}>
        Trang chủ
      </NavLink>
      <NavLink to="/products" onClick={toggleDispatchSearchFalse} className={s.navItem}>
        Sản phẩm
      </NavLink>
      <NavLink to="/blog" className={s.navItem}>
        Blog
      </NavLink>
    </nav>
  );
}
