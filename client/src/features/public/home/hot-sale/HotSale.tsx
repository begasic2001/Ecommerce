import { Container, useMediaQuery, useTheme } from '@mui/material';
import { BigSaleComponent } from './big';
import s from './hot-sale.module.scss';
import { OtherSaleComponent } from './other/OtherSale';

function HotSaleFeature() {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  return (
    <section className={s.hot}>
      <Container className={s.container}>
        <h3 className={s.title}>Hot sale</h3>
        <section className={s.content}>
          {upXlMedia && <BigSaleComponent />}
          <OtherSaleComponent />
        </section>
      </Container>
    </section>
  );
}

export default HotSaleFeature;
