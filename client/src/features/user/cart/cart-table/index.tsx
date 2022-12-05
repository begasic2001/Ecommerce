import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow
} from '@mui/material';
import { Stack } from '@mui/system';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import FallbackImg from '~/assets/images/400x500.png';
import { TrashIcon } from '~/components/icons';

function CartTable() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    const checkConfirm = confirm('Bạn có chắc muốn mua');
    if (checkConfirm) navigate('/user/payment');
  };

  return (
    <section className={clsx('history', 'basis-[75%]')}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="w-[5%] bg-black text-15 text-white-1">STT</TableCell>
              <TableCell className="w-[25%] bg-black text-15 text-white-1">Tên sản phẩm</TableCell>
              <TableCell className="w-[23%] bg-black text-15 text-white-1">Hình ảnh</TableCell>
              <TableCell className="w-[21%] bg-black text-15 text-white-1">Số lượng</TableCell>
              <TableCell className="w-[21%] bg-black text-15 text-white-1">Đơn giá</TableCell>
              <TableCell className="w-[5%] bg-black text-15 text-white-1"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(new Array(5)).map((item, index) => (
              <TableRow className="last:border-none odd:bg-[#eee]">
                <TableCell className="text-14">{index + 1}</TableCell>
                <TableCell className="text-14">ABCDEX</TableCell>
                <TableCell className="text-14">
                  <img src={FallbackImg} alt="product" className="block h-100 w-100" />
                </TableCell>
                <TableCell className="text-14">300.000</TableCell>
                <TableCell className="text-14">100.000</TableCell>
                <TableCell className="text-14">
                  <TrashIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="bg-white-3 py-20 text-center text-14 font-bold ">
                Tổng tiền
              </TableCell>
              <TableCell colSpan={2} className="font-semiBold py-20 text-center text-16">
                5.000.000
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Stack direction="row" className="justify-end">
        <button
          onClick={handleConfirm}
          className={clsx(
            'mt-50 min-h-[5rem] min-w-[20rem] bg-black text-white-1 duration-2',
            'hover:cursor-pointer hover:opacity-50'
          )}
        >
          Thanh toán
        </button>
      </Stack>
    </section>
  );
}

export { CartTable };

