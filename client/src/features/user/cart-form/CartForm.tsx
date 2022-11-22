import { Container } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import s from './cart-form.module.scss';
import Cookies from 'js-cookie';
import { useState } from 'react';

const CartFormFeature = () => {
  const [cartList, setCartList] = useState(() => {
    const stringifyCart = Cookies.get('cart');
    if (stringifyCart === 'undefined') return [];
    return JSON.parse(stringifyCart || '[]');
  });

  const formatCurrency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const handleDelete = (id: string) => {
    const newCartList = cartList.filter((cartItem: any) => cartItem.id !== id);
    Cookies.set('cart', JSON.stringify(newCartList));
    setCartList(newCartList);
  };

  return (
    <section className={s.cart}>
      <Container className={s['cart__container']}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item: any, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt="flower" />
                </td>
                <td>{item.amount}</td>
                <td>{formatCurrency.format(item.price)}</td>
                <td>{formatCurrency.format(item.total)}</td>
                <td>
                  <DeleteIcon
                    sx={{ width: '2rem', height: '2rem' }}
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className={s.submit}>
          <button className={s['submit__btn']}>Tiếp tục</button>
        </section>
      </Container>
    </section>
  );
};

export default CartFormFeature;
