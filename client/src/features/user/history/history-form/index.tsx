import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import clsx from 'clsx';
import { TickIcon } from '~/components/icons';

function History() {
  return (
    <section className={clsx('history', 'basis-[75%]')}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="w-[5%] bg-black text-15 text-white-1">STT</TableCell>
              <TableCell className="w-[23%] bg-black text-15 text-white-1">Mã hóa đơn</TableCell>
              <TableCell className="w-[20%] bg-black text-15 text-white-1">
                Ngày giao dịch
              </TableCell>
              <TableCell className="w-[20%] bg-black text-15 text-white-1">Tổng tiền</TableCell>
              <TableCell className="w-[20%] bg-black text-15 text-white-1">
                Số tiền đã thanh toán
              </TableCell>
              <TableCell className="w-[12%] bg-black text-15 text-white-1">Đã thanh toán</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(new Array(5)).map((item, index) => (
              <>
                <TableRow className="last:border-none odd:bg-[#eee]">
                  <TableCell className="text-14">{index + 1}</TableCell>
                  <TableCell className="text-14">ABCDEX</TableCell>
                  <TableCell className="text-14">1/12/2012</TableCell>
                  <TableCell className="text-14">300.000</TableCell>
                  <TableCell className="text-14">100.000</TableCell>
                  <TableCell className="text-14"></TableCell>
                </TableRow>
                <TableRow className="last:border-none odd:bg-[#eee]">
                  <TableCell className="text-14">{index + 2}</TableCell>
                  <TableCell className="text-14">ABCDEX</TableCell>
                  <TableCell className="text-14">1/12/2012</TableCell>
                  <TableCell className="text-14">300.000</TableCell>
                  <TableCell className="text-14">300.000</TableCell>
                  <TableCell className="text-14">
                    <section className="flex justify-center">
                      <TickIcon />
                    </section>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export { History };
