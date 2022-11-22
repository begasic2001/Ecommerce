import { Container, Divider } from '@mui/material';
import s from './payment-form.module.scss';
import Cookies from 'js-cookie';
import { useState } from 'react';

const PaymentForm = () => {
  const [billProduct, setBillProduct] = useState(() => {
    const stringifyCart = Cookies.get('cart');
    if (stringifyCart === 'undefined') return [];
    return JSON.parse(stringifyCart || '[]');
  });

  const formatCurrency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const totalBill = billProduct.reduce((accum: any, current: any) => accum + current.total, 0);

  return (
    <section className={s.payment}>
      <Container className={s.container}>
        <section className={s.bill}>
          <h2 className={s.billTitle}>Thanh toán</h2>
          <table className={s.summary}>
            <tr>
              <th>Mã hóa đơn</th>
              <td>{Math.floor(Math.random() * 900000)}</td>
            </tr>
            <tr>
              <th>Ngày giao dịch</th>
              <td>23/11/2022</td>
            </tr>
            <tr>
              <th>Ngày dự kiến giao</th>
              <td>30/11/2022</td>
            </tr>
          </table>
          <br />
          <Divider />
          <br />
          <section className={s.user}>
            <h3 className={s.userTitle}>Thông tin liên hệ</h3>
            <table className={s.userTable}>
              <tbody>
                <tr>
                  <th>Họ và tên</th>
                  <td>Hưng</td>
                </tr>
                <tr>
                  <th>Số điện thoại</th>
                  <td>0952356841</td>
                </tr>
                <tr>
                  <th>Địa chỉ</th>
                  <td>abc Q.10</td>
                </tr>
              </tbody>
            </table>
          </section>
          <br />
          <Divider />
          <br />
          <section className={s.product}>
            <h3 className={s.productTitle}>Thông tin sản phẩm</h3>
            <table className={s.productTable}>
              <tbody>
                {billProduct.map((item: any) => (
                  <tr>
                    <th>{item.name}</th>
                    <td>x{item.amount}</td>
                    <td>{formatCurrency.format(item.total)}</td>
                  </tr>
                ))}
                <tr>
                  <th>Tổng tiền</th>
                  <td colSpan={2}>{formatCurrency.format(totalBill)}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        <button className={s.submit}>Thanh toán</button>
      </Container>
    </section>
  );
};

export default PaymentForm;
