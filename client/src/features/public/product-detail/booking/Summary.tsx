import {
  Add as AddIcon,
  LocalShipping as TruckIcon,
  Remove as MinusIcon,
} from '@mui/icons-material';
import 'swiper/css';
import s from './booking.module.scss';
import { ISSummary, ISummaryPartProps } from './interface';

const styles: ISSummary = {
  summary: s.summary,
  table: s.table,
  tableCode: s['table__code'],
  tablePrice: s['table-price'],
  tableQuantity: s['table-quantity'],
  tableQuantityBox: s['table-quantity__box'],
  tableQuantityBtn: s['table-quantity__btn'],
};

export function SummaryComponent(props: ISummaryPartProps) {
  if (!props) return null;
  const { maxQuantity, quantity, handleQuantityBtn, handleQuantityCurrent } = props;

  return (
    <section className={styles.summary}>
      <h3>Hoa hướng dương</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Mã sản phẩm</th>
            <td className={styles.tableCode}>HHD001</td>
          </tr>
          <tr>
            <td colSpan={2} className={styles.tablePrice}>
              <del>1.450.000đ</del> 1.235.000đ
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
                <input type="number" value={quantity} onChange={handleQuantityCurrent} />
                <div onClick={() => handleQuantityBtn('add')} className={styles.tableQuantityBtn}>
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
