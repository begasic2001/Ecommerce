import {
  Add as AddIcon,
  LocalShipping as TruckIcon,
  Remove as MinusIcon,
} from '@mui/icons-material';
import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import 'swiper/css';
import s from './booking.module.scss';
import { IArrGalleryProps, IImgGallerySelect, ISBooking } from './interface';
import { GalleryPart } from './Gallery';
import { Summary } from './Summary';

const styles: ISBooking = {
  booking: s.booking,
  bookingRow: s['booking__row'],
};

function BookingFeature({ arrGallery }: IArrGalleryProps) {
  console.log('arrGallery', arrGallery);
  const [imgGallerySelect, setImgGallerySelect] = useState<IImgGallerySelect>({
    id: arrGallery[0].id || '',
    url: arrGallery[0].url || '',
  });

  const [quantity, setQuantity] = useState<number>(1);
  const [maxQuantity, setMaxQuantity] = useState<number>(300);

  const handleGallerySelect = (id: string) => {
    const galleryItem: IImgGallerySelect | undefined = arrGallery.find((item) => item.id === id);
    if (!galleryItem || imgGallerySelect.id === id) return;
    setImgGallerySelect({
      ...imgGallerySelect,
      id: galleryItem.id,
      url: galleryItem.url,
    });
  };

  const handleQuantityCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resQuantity: number = Number(e.target.value);
    if (resQuantity > maxQuantity) setQuantity(maxQuantity);
    else if (resQuantity < 1) setQuantity(1);
    else setQuantity(resQuantity);
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
    <Container className={styles.booking}>
      <Stack className={styles.bookingRow}>
        <GalleryPart
          arrGallery={arrGallery}
          imgGallerySelect={imgGallerySelect}
          handleGallerySelect={handleGallerySelect}
        />
        <Summary
          maxQuantity={maxQuantity}
          quantity={quantity}
          handleQuantityBtn={handleQuantityBtn}
          handleQuantityCurrent={handleQuantityCurrent}
        />
      </Stack>
    </Container>
  );
}

export default BookingFeature;
