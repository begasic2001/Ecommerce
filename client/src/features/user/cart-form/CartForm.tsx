import { Container } from '@mui/material';
import s from './cart-form.module.scss';

const CartFormFeature = () => {
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
            <tr>
              <td>1</td>
              <td>Hoa hường</td>
              <td>
                <img
                  src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
                  alt="flower"
                />
              </td>
              <td>2</td>
              <td>500000</td>
              <td>1000000</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
  );
};

export default CartFormFeature;
