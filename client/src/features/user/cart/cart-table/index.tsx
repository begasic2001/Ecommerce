import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { Stack } from '@mui/system';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { remove, updateAll } from '~/app/cartSlice';
import FallbackImg from '~/assets/images/400x500.png';
import { CustomTextField } from '~/components/form/input';
import { TrashIcon } from '~/components/icons';
import { formatCurrency } from '~/utils/format-currency';
import { useSnackbar } from 'notistack';
import { codeGenerator } from '~/utils/random-character';
import Cookies from 'js-cookie';

function CartTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const cartSelector = useSelector((state: any) => state.cart.data);
  const { control, handleSubmit } = useForm();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const handleTotalPrice = () => {
      const total = cartSelector.reduce((accum: number, current: any) => accum + current.price, 0);
      setTotalPrice(total);
    };

    handleTotalPrice();
  }, [cartSelector]);

  const handleDeleteItem = (id: string) => {
    const checkDel = confirm('Bạn có muốn xóa???');

    if (!checkDel) return;
    dispatch(remove(id));
    enqueueSnackbar('Xóa thành công!!!🎉🎉🎉', { variant: 'success' });
  };

  const handleConfirm = (value: any) => {
    const checkConfirm = confirm('Bạn có chắc muốn mua');

    if (!checkConfirm) return;
    const quantityValues = Object.values(value);
    const newCartItemList = cartSelector.map((item: any, index: number) => {
      const quantity = Number(quantityValues[index]);
      const price = quantity * item.basePrice;

      return { ...item, quantity, price };
    });

    Cookies.set('codeBill', JSON.stringify(codeGenerator(6)))
    dispatch(updateAll(newCartItemList));

    setTimeout(() => {
      navigate('/user/payment');
    }, 500);
  };

  return (
    <section className={clsx('history', 'basis-[75%]')}>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="w-[5%] bg-black text-15 text-white-1">STT</TableCell>
                <TableCell className="w-[25%] bg-black text-15 text-white-1">
                  Tên sản phẩm
                </TableCell>
                <TableCell className="w-[23%] bg-black text-15 text-white-1">Hình ảnh</TableCell>
                <TableCell className="w-[21%] bg-black text-15 text-white-1">Số lượng</TableCell>
                <TableCell className="w-[21%] bg-black text-15 text-white-1">Đơn giá</TableCell>
                <TableCell className="w-[5%] bg-black text-15 text-white-1"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartSelector.map((item: any, index: number) => (
                <TableRow key={item.id} className="last:border-none odd:bg-[#eee]">
                  <TableCell className="text-14">{index + 1}</TableCell>
                  <TableCell className="text-14">{item.name}</TableCell>
                  <TableCell className="text-14">
                    <img
                      src={item.image || FallbackImg}
                      alt="product"
                      className="block h-100 w-100"
                    />
                  </TableCell>
                  <TableCell className="text-14">
                    <CustomTextField
                      type="number"
                      control={control}
                      name={`quantity-${item.id}`}
                      defaultValue={item.quantity}
                      fullWidth={false}
                    />
                  </TableCell>
                  <TableCell className="text-14">{formatCurrency.format(item.price)}</TableCell>
                  <TableCell className="text-14">
                    <div onClick={() => handleDeleteItem(item.id)}>
                      <TrashIcon />
                    </div>
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
                  {formatCurrency.format(totalPrice)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Stack direction="row" className="justify-end">
          <button
            className={clsx(
              'mt-50 min-h-[5rem] min-w-[20rem] bg-black text-white-1 duration-2',
              'hover:cursor-pointer hover:opacity-50'
            )}
          >
            Thanh toán
          </button>
        </Stack>
      </form>
    </section>
  );
}

export { CartTable };
