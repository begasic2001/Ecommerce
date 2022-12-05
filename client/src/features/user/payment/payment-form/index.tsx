import {
  Paper,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableFooter,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { v4 as uuiv4 } from 'uuid';

function PaymentForm() {
  const [payment, setPayment] = useState('Tiền mặt');

  const handlePaymentMethod = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  return (
    <section className={clsx('payment-form', 'mt-50')}>
      <Paper elevation={3} className="relative mx-auto w-1/2 p-30">
        <h3 className="font-semiBold text-40">Thanh toán</h3>
        <section className="bill-code">
          <h5
            className={clsx(
              'absolute right-30 top-30 border-none text-25 font-bold',
              `contents-[''] h-40 after:absolute after:top-[-15%] after:left-[-15%] after:h-50 after:w-[130%] after:border-2 after:border-dashed`
            )}
          >
            ABC51352
          </h5>
        </section>
        <section className={clsx('information', 'mt-30')}>
          <h4 className="text-20 font-bold">Thông tin liên hệ</h4>
          <Table className="mt-10">
            <TableBody>
              <TableRow>
                <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                  Họ và tên
                </TableCell>
                <TableCell className="border-none text-14">Hưng</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                  Điện thoại liên lạc
                </TableCell>
                <TableCell className="border-none text-14">015684262</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                  Địah chỉ
                </TableCell>
                <TableCell className="border-none text-14">abc/46 abc</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
        <Divider />
        <section className={clsx('product', 'mt-30')}>
          <h4 className="text-20 font-bold">Thông tin sản phẩm</h4>
          <Table className="mt-10">
            <TableBody>
              {Array.from(new Array(5)).map((item, index) => (
                <TableRow key={uuiv4()} className="last:border-b-2">
                  <TableCell component="th" className="w-[10%] border-none text-14">
                    {index}
                  </TableCell>
                  <TableCell className="w-[40%] border-none text-14">Hưng</TableCell>
                  <TableCell className="w-1/5 border-none text-14">x1</TableCell>
                  <TableCell className="w-[30%] border-none text-14">300.000đ</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell
                  component="th"
                  colSpan={3}
                  className="font-semiBold border-none text-center text-16"
                >
                  Tổng tiền
                </TableCell>
                <TableCell className="font-semiBold border-none text-16">5.000.000đ</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>
        <section className={clsx('payment-method', 'mt-30')}>
          <h4 className="text-20 font-bold">Phương thức thanh toán</h4>
          <Select
            value={payment}
            onChange={handlePaymentMethod}
            fullWidth
            className="mt-10 text-14"
          >
            <MenuItem value="Tiền mặt" className="text-14">
              Tiền mặt
            </MenuItem>
            <MenuItem value="Paypal" className="text-14">
              Paypal
            </MenuItem>
            <MenuItem value="VNPay" className="text-14">
              VNPay
            </MenuItem>
          </Select>
        </section>
        <section className={clsx('submit', 'mt-50')}>
          <button
            className={clsx(
              'h-50 w-full bg-black text-white-1 duration-2',
              'text-black hover:opacity-60'
            )}
          >
            Thanh toán
          </button>
        </section>
      </Paper>
    </section>
  );
}

export { PaymentForm };
