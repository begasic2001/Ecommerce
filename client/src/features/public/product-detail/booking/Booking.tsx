import { Container } from '@mui/material';
import { useState } from 'react';
import 'swiper/css';
import s from './booking.module.scss';
import { GalleryComponent } from './GalleryComp';
import { IArrGalleryProps, IImgGallerySelect, ISBooking } from './interface';
import { SummaryComponent } from './Summary';

const styles: ISBooking = {
  booking: s.booking,
  container: s['booking__container'],
  row: s['booking__row'],
};

function BookingFeature({ arrGallery }: IArrGalleryProps) {
  const [imgGallerySelect, setImgGallerySelect] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [maxQuantity, setMaxQuantity] = useState<number>(300);

  const handleGallerySelect = (num: number) => {
    setImgGallerySelect(num);
  };

  const handleQuantityCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resQuantity: number = Number(e.target.value);
    if (resQuantity > maxQuantity) {
      setQuantity(maxQuantity);
    } else if (resQuantity < 1) {
      setQuantity(1);
    } else {
      setQuantity(resQuantity);
    }
  };

  const handleQuantityBtn = (action: string) => {
    if (action === 'add') {
      if (quantity >= maxQuantity) return;
      setQuantity(quantity + 1);
    } else {
      if (quantity <= 1) return;
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className={styles.booking}>
      <Container className={styles.container}>
        <section className={styles.row}>
          <GalleryComponent
            arrGallery={arrGallery}
            imgGallerySelect={imgGallerySelect}
            handleGallerySelect={handleGallerySelect}
          />
          <SummaryComponent
            maxQuantity={maxQuantity}
            quantity={quantity}
            handleQuantityBtn={handleQuantityBtn}
            handleQuantityCurrent={handleQuantityCurrent}
          />
        </section>
      </Container>
    </section>
  );
}

export default BookingFeature;
