import * as S from './nav.style';

const Nav = () => {
  return (
    <S.Nav>
      <S.Content>
        <span className="nav__item">Kệ chúc mừng</span>
        <span className="nav__item">Sinh nhận</span>
        <span className="nav__item">Chia buồn</span>
        <span className="nav__item">Hoa Ngoại Nhập</span>
        <span className="nav__item">Lan Hồ Điệp</span>
      </S.Content>
    </S.Nav>
  );
};

export default Nav;
