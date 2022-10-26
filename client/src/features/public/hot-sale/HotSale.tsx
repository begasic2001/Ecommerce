import { Stack, Container, ImageList, ImageListItem } from '@mui/material';
import { ProductItem } from '~/components/product-item';
import { useTheme, useMediaQuery } from '@mui/material';
import s from './hot-sale.module.scss';

const HotSaleFeature = () => {
  const theme = useTheme();
  const largeMedia = useMediaQuery(theme.breakpoints.up('xl'));
  const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const smallMedia = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container component={'section'} className={s.hot}>
      <h3 className={s['hot__title']}>Hot sale</h3>
      <Stack className={s.content}>
        {largeMedia && (
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
        )}
        <Stack className={s.other}>
          <ImageList cols={mediumMedia ? 3 : smallMedia ? 2 : 4} gap={20}>
            {Array(8)
              .fill(0)
              .map(() => (
                <ImageListItem>
                  <ProductItem />
                </ImageListItem>
              ))}
          </ImageList>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HotSaleFeature;
