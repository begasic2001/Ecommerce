import {
  Divider,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { paymentApi } from '~/api';
import { CustomTextField } from '~/components/form/input';
import { formatCurrency } from '~/utils/format-currency';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemaValidate = yup.object({
  ship_name: yup
    .string()
    .required('* Không được bỏ trống')
    .min(2, 'Nhập tên hợp lệ')
    .matches(
      /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm,
      '* Nhập tên hợp lệ'
    ),
  ship_phone: yup
    .string()
    .required('* Không được bỏ trống')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, '* Nhập số điện thoại hợp lệ với 10 chữ số'),
  ship_email: yup.string().required('* Không được bỏ trống').email('* Nhập đúng định dạng email'),
  ship_address: yup.string().required('* Không được bỏ trống'),
  ship_city: yup.string().required('* Không được bỏ trống'),
});

function PaymentForm() {
  const userSelector = useSelector((state: any) => state.user.data);
  const cartSelector = useSelector((state: any) => state.cart.data);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidate),
  });

  const [payment, setPayment] = useState<string>('Tiền mặt');
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const handleTotalPrice = () => {
      const total = cartSelector.reduce((accum: number, current: any) => accum + current.price, 0);
      setTotalPrice(total);
    };

    handleTotalPrice();
  }, [cartSelector]);

  const handlePaymentMethod = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  const submitValue = async (value: any) => {
    const items = cartSelector.map((item: any) => {
      return {
        name: item.name,
        price: item.price / 23000,
        currency: 'USD',
        quantity: item.quantity,
      };
    });
    const ship = [value];

    const data = {
      items,
      ship,
    };

    const headers = {
      accessToken: userSelector.accessToken,
    };

    const res = await paymentApi.payment(data, headers);
    await console.log('res', res);
    // console.log(window.location);
  };

  return (
    <section className={clsx('payment-form', 'mt-50')}>
      <form onSubmit={handleSubmit(submitValue)}>
        <Paper elevation={3} className="relative mx-auto w-1/2 p-30">
          <h3 className="font-semiBold text-40">Thanh toán</h3>
          <section className={clsx('information', 'mt-30')}>
            <h4 className="text-20 font-bold">Thông tin liên hệ</h4>
            <Table className="mt-10">
              <TableBody>
                <TableRow>
                  <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                    Họ và tên
                  </TableCell>
                  <TableCell className="border-none text-14">
                    <CustomTextField control={control} name="ship_name" error={errors.ship_name?.message} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                    Điện thoại liên lạc
                  </TableCell>
                  <TableCell className="border-none text-14">
                    <CustomTextField control={control} name="ship_phone" error={errors.ship_phone?.message} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                    Email
                  </TableCell>
                  <TableCell className="border-none text-14">
                    <CustomTextField control={control} name="ship_email" error={errors.ship_email?.message} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                    Địa chỉ
                  </TableCell>
                  <TableCell className="border-none text-14">
                    <CustomTextField control={control} name="ship_address" error={errors.ship_address?.message} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" className="w-1/5 border-none text-14 font-bold">
                    Thành phố
                  </TableCell>
                  <TableCell className="border-none text-14">
                    <CustomTextField control={control} name="ship_city" error={errors.ship_city?.message} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          <Divider />
          <section className={clsx('product', 'mt-30')}>
            <h4 className="text-20 font-bold">Thông tin sản phẩm</h4>
            <Table className="mt-10">
              <TableBody>
                {cartSelector.map((item: any, index: number) => (
                  <TableRow key={item.id} className="last:border-b-2">
                    <TableCell component="th" className="w-[10%] border-none text-14">
                      {index}
                    </TableCell>
                    <TableCell className="w-[40%] border-none text-14">{item.name}</TableCell>
                    <TableCell className="w-1/5 border-none text-14">x{item.quantity}</TableCell>
                    <TableCell className="w-[30%] border-none text-14">
                      {formatCurrency.format(item.price)}
                    </TableCell>
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
                  <TableCell className="font-semiBold border-none text-16">
                    {formatCurrency.format(totalPrice)}
                  </TableCell>
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
              type="submit"
              className={clsx(
                'h-50 w-full bg-black text-white-1 duration-2',
                'text-black hover:opacity-60'
              )}
            >
              Thanh toán
            </button>
          </section>
        </Paper>
      </form>
    </section>
  );
}

export { PaymentForm };
