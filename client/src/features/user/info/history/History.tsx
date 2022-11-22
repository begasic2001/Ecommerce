import s from './history.module.scss';

export const HistoryComponent = () => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã hóa đơn</th>
          <th>Ngày giao dịch</th>
          <th>Tổng tiền</th>
          <th>Thanh toán</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{Math.random() * 900000}</td>
          <td>23/11/2022</td>
          <td>100000</td>
          <td>Đã thanh toán</td>
        </tr>
      </tbody>
    </table>
  );
};
