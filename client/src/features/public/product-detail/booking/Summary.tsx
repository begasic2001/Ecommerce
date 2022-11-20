import {
  Add as AddIcon,
  LocalShipping as TruckIcon,
  Remove as MinusIcon,
} from '@mui/icons-material';
import 'swiper/css';
import s from './booking.module.scss';
import { ISummaryPartProps } from './interface';
import { useProductDetailContext } from '~/store/product-detail.store';

export function SummaryComponent({
  maxQuantity,
  quantity,
  handleQuantityBtn,
  handleQuantityCurrent,
}: ISummaryPartProps) {
  const theme = useProductDetailContext();

  const formatCurrency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const price = formatCurrency.format(Number(theme?.productDetail?.product.price));
  const newPrice = formatCurrency.format(Number(theme?.productDetail?.product.newPrice));

  return (
    <section className={s.summary}>
      <h3>{theme?.productDetail?.product.name}</h3>
      <table className={s.table}>
        <tbody>
          <tr>
            <th>Mã sản phẩm</th>
            <td className={s['table__code']}>{theme?.productDetail?.product.code}</td>
          </tr>
          <tr>
            <td colSpan={2} className={s['table-price']}>
              <del>{price}</del> {newPrice}
            </td>
          </tr>
          <tr>
            <th>Vận chuyển</th>
            <td>
              <TruckIcon /> Miễn phí vận chuyển
            </td>
          </tr>
          <tr>
            <th>Số lượng</th>
            <td className={s['table-quantity']}>
              <div className={s['table-quantity__box']}>
                <div
                  onClick={() => handleQuantityBtn('minus')}
                  className={s['table-quantity__btn']}
                >
                  <MinusIcon />
                </div>
                <input type="number" value={quantity} onChange={handleQuantityCurrent} />
                <div onClick={() => handleQuantityBtn('add')} className={s['table-quantity__btn']}>
                  <AddIcon />
                </div>
              </div>
              <p>Có {maxQuantity} sản phẩm có sẵn</p>
            </td>
          </tr>
        </tbody>
      </table>
      <button>Thêm vào giỏ hàng</button>
    </section>
  );
}
