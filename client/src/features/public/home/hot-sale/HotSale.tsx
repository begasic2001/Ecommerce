import { Container, useMediaQuery, useTheme } from '@mui/material';
import { BigSaleComponent } from './BigSaleComp';
import styles from './hot-sale.module.scss';
import { ISHotSale } from './interface';
import { OtherSaleComponent } from './OtherSale';

const s: ISHotSale = {
  hot: styles.hot,
  container: styles['hot__container'],
  title: styles.title,
  content: styles.content,
};

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
