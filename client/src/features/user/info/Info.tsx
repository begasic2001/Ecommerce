import { Container } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { ContactComponent } from './contact/ContactComp';
import { ChangePassComponent } from './change-pass/ChangePassComp';
import { HistoryComponent } from './history/History';
import s from './info.module.scss';

const InfoFeature = () => {
  const location = useLocation();
  const pathName = location.pathname;
  console.log('pathName', pathName);
  console.log('location', location);

  return (
    <section className={s.info}>
      <Container className={s['info__container']}>
        <section className={s['info__row']}>
          <section className={s.nav}>
            <NavLink to="/user/info" className={s['nav__item']}>
              Thông tin cá nhân
            </NavLink>
            <NavLink to="/user/change-pass" className={s['nav__item']}>
              Đổi mật khẩu
            </NavLink>
            <NavLink to="/user/history" className={s['nav__item']}>
              Lịch sử giao dịch
            </NavLink>
          </section>
          <section className={s.content}>
            {pathName === '/user/info' && <ContactComponent />}
            {pathName === '/user/change-pass' && <ChangePassComponent />}
            {pathName === '/user/history' && <HistoryComponent />}
          </section>
        </section>
      </Container>
    </section>
  );
};

export default InfoFeature;
