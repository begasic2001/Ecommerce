import { Container, useMediaQuery, useTheme } from '@mui/material';
import { BigSaleComponent } from './BigSaleComp';
import s from './hot-sale.module.scss';
import { OtherSaleComponent } from './OtherSale';

function HotSaleFeature() {
  const theme = useTheme();
  const media = {
    upXlMedia: useMediaQuery<boolean>(theme.breakpoints.up('xl')),
    betweenSmLg: useMediaQuery<boolean>(theme.breakpoints.between('sm', 'lg')),
    downSm: useMediaQuery<boolean>(theme.breakpoints.down('sm')),
  };

  return (
    <section className={s.hot}>
      <Container className={s['hot__container']}>
        <h3 className={s.title}>Hot sale</h3>
        <section className={s.content}>
          {media.upXlMedia && <BigSaleComponent />}
          <OtherSaleComponent media={media} />
        </section>
      </Container>
    </section>
  );
}

export default HotSaleFeature;
