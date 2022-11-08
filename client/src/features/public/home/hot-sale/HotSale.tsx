import { Container, useMediaQuery, useTheme } from '@mui/material';
import { BigSaleComponent } from './BigSale';
import s from './hot-sale.module.scss';
import { ISHotSale } from './interface';
import { OtherSaleComponent } from './OtherSale';

const styles: ISHotSale = {
  hot: s.hot,
  container: s['hot__container'],
  hotTitle: s['hot__title'],
  hotContent: s['hot__content'],
};

function HotSaleFeature() {
  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  return (
    <section className={styles.hot}>
      <Container className={styles.container}>
        <h3 className={styles.hotTitle}>Hot sale</h3>
        <section className={styles.hotContent}>
          {upXlMedia && <BigSaleComponent />}
          <OtherSaleComponent />
        </section>
      </Container>
    </section>
  );
}

export default HotSaleFeature;
