import { Link } from 'react-router-dom';
import * as S from './nav.style';

const Nav = () => {
  return (
    <S.Nav>
      <S.Content>
        <Link to={'/products'}>Kệ chúc mừng</Link>
        <Link to={'/products'}>Sinh nhận</Link>
        <Link to={'/products'}>Chia buồn</Link>
        <Link to={'/products'}>Hoa Ngoại Nhập</Link>
        <Link to={'/products'}>Lan Hồ Điệp</Link>
      </S.Content>
    </S.Nav>
  );
};

export default Nav;
