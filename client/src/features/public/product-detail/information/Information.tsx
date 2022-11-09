import { Container, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import styles from './information.module.scss';
import { DataInfo, DataGuide, DataTransport } from './Data';
import clsx from 'clsx';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ISInformation } from './interface';

const s: ISInformation = {
  information: styles.information,
  container: styles['information__container'],
  tab: styles.tab,
  tabItem: styles['tab__item'],
  tabItemSelected: styles['tab__item--selected'],
};

function InformationFeature() {
  const theme = useTheme();
  const media = {
    betweenSmMd: useMediaQuery<boolean>(theme.breakpoints.between('sm', 'md')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };

  const [tabSelect, setTabSelect] = useState(1);

  const handleTabSelect = (num: number) => {
    setTabSelect(num);
  };

  return (
    <section className={s.information}>
      <Container className={s.container}>
        <section className={s.tab}>
          <Swiper
            direction="horizontal"
            spaceBetween={0}
            slidesPerView={media.downSm ? 1 : media.betweenSmMd ? 2 : 3}
          >
            <SwiperSlide>
              <span
                onClick={() => handleTabSelect(1)}
                className={clsx(s.tabItem, tabSelect === 1 && s.tabItemSelected)}
              >
                Thông tin sản phẩm
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                onClick={() => handleTabSelect(2)}
                className={clsx(s.tabItem, tabSelect === 2 && s.tabItemSelected)}
              >
                Hướng dẫn chăm sóc
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                onClick={() => handleTabSelect(3)}
                className={clsx(s.tabItem, tabSelect === 3 && s.tabItemSelected)}
              >
                Đặt hàng & giao hàng
              </span>
            </SwiperSlide>
          </Swiper>
        </section>
        <section>
          {tabSelect === 1 && <DataInfo />}
          {tabSelect === 2 && <DataGuide />}
          {tabSelect === 3 && <DataTransport />}
        </section>
      </Container>
    </section>
  );
}

export default InformationFeature;
