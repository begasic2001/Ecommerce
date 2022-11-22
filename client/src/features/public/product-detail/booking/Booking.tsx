import { Container } from '@mui/material';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import 'swiper/css';
import { useProductDetailContext } from '~/store/product-detail.store';
import s from './booking.module.scss';
import { GalleryComponent } from './GalleryComp';
import { SummaryComponent } from './Summary';

interface ICartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
  total: number;
}

function BookingFeature() {
  const theme = useProductDetailContext();
  const [imgGallerySelect, setImgGallerySelect] = useState<number>(0);
  const [cartList, setCartList] = useState<ICartItem[] | any>(() => {
    const stringifyCart = Cookies.get('cart');
    if (stringifyCart === 'undefined') return [];
    return JSON.parse(stringifyCart || '[]');
  });
  const [quantity, setQuantity] = useState<number>(1);
  const [maxQuantity, setMaxQuantity] = useState<number>(() =>
    Number(theme?.productDetail?.product.amount)
  );

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
      setQuantity((newState) => newState + 1);
    } else {
      if (quantity <= 1) return;
      setQuantity((newState) => newState - 1);
    }
  };

  const addItemToCart = () => {
    const price = theme?.productDetail.product.newPrice || 1000;
    const item: ICartItem = {
      id: theme?.productDetail.product.id || '',
      name: theme?.productDetail.product.name || '',
      image: theme?.productDetail.product.images[0].image || '',
      price,
      amount: quantity,
      total: price * quantity,
    };

    const checkExistItem = cartList.some((cartItem: any) => cartItem.id === item.id);
    if (checkExistItem) {
      const newCartList = cartList.map((cartItem: any) => {
        if (cartItem.id === item.id) {
          const amount = cartItem.amount + item.amount;
          const price = cartItem.price;
          const total = amount * price;

          return {
            ...cartItem,
            amount,
            total,
          };
        }
      });

      setCartList(newCartList);
    } else setCartList([...cartList, item]);
  };

  useEffect(() => {
    Cookies.set('cart', JSON.stringify(cartList));
  }, [cartList]);

  return (
    <section className={s.booking}>
      <Container className={s['booking__container']}>
        <section className={s['booking__row']}>
          <GalleryComponent
            imgGallerySelect={imgGallerySelect}
            handleGallerySelect={handleGallerySelect}
          />
          <SummaryComponent
            maxQuantity={maxQuantity}
            quantity={quantity}
            handleQuantityBtn={handleQuantityBtn}
            handleQuantityCurrent={handleQuantityCurrent}
            addItemToCart={addItemToCart}
          />
        </section>
      </Container>
    </section>
  );
}

export default BookingFeature;
