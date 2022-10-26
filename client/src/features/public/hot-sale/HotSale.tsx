import { Stack, Container, ImageList, ImageListItem } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import s from './hot-sale.module.scss';

const HotSaleFeature = () => {
  return (
    <Container className={s.footer}>
      <h3 className={s['footer__title']}>Hot sale</h3>
      <Stack className={s.content}>
        <Stack className={s.big}>
          <section className={s['big__image']}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
              alt="big sale flower"
            />
          </section>
          <Stack className={s['big-info']}>
            <p className={s['big-info__name']}>Hoa Tang</p>
            <p className={s['big-info__price']}>
              <span>$300</span> $225
            </p>
          </Stack>
          <Stack className={s['big-remain']}>
            <p className={s['big-remain__txt']}>Còn lại</p>
            <p className={s['big-remain__time']}>43 : 22 : 17</p>
          </Stack>
        </Stack>
        <ImageList>
          {Array(6)
            .fill(0)
            .map(() => (
              <ImageListItem>
                <ProductItem />
              </ImageListItem>
            ))}
        </ImageList>
        {/* <S.HotOther>
          {Array(6)
            .fill(0)
            .map(() => (
              <ProductItem />
            ))}
        </S.HotOther> */}
      </Stack>
    </Container>
  );
};

export default HotSaleFeature;
