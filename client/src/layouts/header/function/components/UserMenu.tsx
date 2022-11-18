import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/PersonAdd';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { IUserAccountItem, IUserProps } from '../interface.type';
import s from '../function.module.scss';

export function UserMenu({ userProps }: IUserProps) {
  const { anchorEl, openMenu, handleMenuClick, handleMenuClose } = userProps;

  return (
    <>
      <IconButton onClick={handleMenuClick} className={s.user}>
        <AccountCircleIcon sx={{ width: '3rem', height: '3rem' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        className={s.userMenu}
      >
        <AccountMenuItem path="/account/login" icon={<LoginIcon />} title="Login" />
        <Divider />
        <AccountMenuItem path="/account/register" icon={<RegisterIcon />} title="Register" />
      </Menu>
    </>
  );
}

const AccountMenuItem = ({ path, icon, title }: IUserAccountItem) => (
  <MenuItem>
    <Link to={path} className={s.userLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      {title}
    </Link>
  </MenuItem>
);
