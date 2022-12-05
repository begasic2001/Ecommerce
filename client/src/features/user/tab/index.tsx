import { Stack, TableContainerTypeMap } from '@mui/material';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

interface TabItem {
  isNotLastChild?: boolean;
  children: string;
  path: string;
}

function TabFeature() {
  return (
    <section className={clsx('tab', 'basis-1/5')}>
      <Stack className="rounded-5 border border-solid">
        <TabItem path="/user/info">Thông tin tài khoản</TabItem>
        <TabItem path="/user/change-pass">Đổi mật khẩu</TabItem>
        <TabItem path="/user/history" isNotLastChild={false}>
          Lịch sử giao dịch
        </TabItem>
      </Stack>
    </section>
  );
}

const TabItem = ({ isNotLastChild = true, children, path }: TabItem) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      clsx('py-20 px-15 text-16 ', {
        'bg-[#ddd] font-bold': isActive,
        'border-b': isNotLastChild,
      })
    }
  >
    {children}
  </NavLink>
);

export { TabFeature };
