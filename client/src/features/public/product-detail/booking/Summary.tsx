import {
  Add as AddIcon,
  LocalShipping as TruckIcon,
  Remove as MinusIcon
} from '@mui/icons-material';
import 'swiper/css';
import s from './booking.module.scss';
import { ISSummary, ISummaryPartProps } from './interface';

const styles: ISSummary = {
  summary: s.summary,
  summaryTitle: s['summary__title'],
  summaryConfirm: s['summary__confirm'],
  table: s.table,
  tableCode: s['table__code'],
  tablePrice: s['table-price'],
  tablePriceOld: s['table-price__old'],
  tableQuantity: s['table-quantity'],
  tableQuantityBox: s['table-quantity__box'],
  tableQuantityBtn: s['table-quantity__btn'],
  tableQuantityRemain: s['table-quantity__remain'],
  tableQuantityInput: s['table-quantity__input'],
};

export function Summary(props: ISummaryPartProps) {
  if (!props) return null;
  const { maxQuantity, quantity, handleQuantityBtn, handleQuantityCurrent } = props;

  return (
    <section className={styles.summary}>
      <h3 className={styles.summaryTitle}>Hoa hướng dương</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Mã sản phẩm</th>
            <td className={styles.tableCode}>HHD001</td>
          </tr>
          <tr>
            <td colSpan={2} className={styles.tablePrice}>
              <del className={styles.tablePriceOld}>1.450.000đ</del> 1.235.000đ
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
            <td className={styles.tableQuantity}>
              <div className={styles.tableQuantityBox}>
                <div onClick={() => handleQuantityBtn('minus')} className={styles.tableQuantityBtn}>
                  <MinusIcon />
                </div>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityCurrent}
                  className={styles.tableQuantityInput}
                />
                <div onClick={() => handleQuantityBtn('add')} className={styles.tableQuantityBtn}>
                  <AddIcon />
                </div>
              </div>
              <p className={styles.tableQuantityRemain}>Có {maxQuantity} sản phẩm có sẵn</p>
            </td>
          </tr>
        </tbody>
      </table>
      <button className={styles.summaryConfirm}>Thêm vào giỏ hàng</button>
    </section>
  );
}
