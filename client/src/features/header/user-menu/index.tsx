import { Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginIcon, RegisterIcon, UserBorderIcon } from '~/components/icons';

interface UserMenuItem {
  path: string;
  icon: React.ReactNode;
  children: string;
}

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu: boolean = Boolean(anchorEl);

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <section className="user-menu">
      <IconButton onClick={handleMenuClick} className="ml-20">
        <UserBorderIcon size="3rem" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          className: clsx(
            'mt-[1.2rem] overflow-visible drop-shadow-md',
            `before:absolute before:top-0 before:right-[1.4rem] before:h-10 before:w-10 before:translate-y-[-50%] before:rotate-45 before:bg-white-1 before:content-['']`
          ),
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <UserMenuItem path="/account/login" icon={<LoginIcon />}>
          Login
        </UserMenuItem>
        <Divider />
        <UserMenuItem path="/account/register" icon={<RegisterIcon />}>
          Register
        </UserMenuItem>
      </Menu>
    </section>
  );
}

const UserMenuItem = ({ path, icon, children }: UserMenuItem) => (
  <MenuItem>
    <Link to={path} className="flex text-14 text-black no-underline">
      <ListItemIcon>{icon}</ListItemIcon>
      {children}
    </Link>
  </MenuItem>
);

export { UserMenu };
