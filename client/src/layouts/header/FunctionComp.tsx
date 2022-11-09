import {
  AccountCircle as AccountCircleIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.scss';
import { IFunctionAccountItem, IFunctionProps, ISFunction } from './interface';

const styles: ISFunction = {
  column: s['header__column'],
  search: s.search,
  user: s.user,
  userMenu: s['user-menu'],
  userLink: s['user__link'],
};

export const FunctionComponent = (props: IFunctionProps) => {
  if (!props) return null;
  const { searchValue, handleSearchValue } = props;

  const theme = useTheme();
  const upXlMedia = useMediaQuery<boolean>(theme.breakpoints.up('xl'));

  const [showSearch, setShowSearch] = useState<boolean>(false); // Toggle search input
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Identify account option menu modal

  const open = Boolean(anchorEl); // Toggle menu modal by anchorEl state

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const AccountMenuItem = ({ path, icon, title }: IFunctionAccountItem) => (
    <MenuItem>
      <Link to={path} className={styles.userLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        {title}
      </Link>
    </MenuItem>
  );

  return (
    <section className={styles.column}>
      <>
        {!showSearch && (
          <IconButton onClick={toggleSearch}>
            <SearchIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
          </IconButton>
        )}
        {showSearch && (
          <TextField
            type="search"
            value={searchValue}
            onChange={handleSearchValue}
            placeholder="Nhập hoa, chậu yêu thích..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" onClick={toggleSearch}>
                  <SearchIcon sx={{ width: '2rem', height: '2rem' }} />
                </InputAdornment>
              ),
            }}
            className={styles.search}
          />
        )}
      </>
      {upXlMedia && (
        <>
          <IconButton onClick={handleClick} className={styles.user}>
            <AccountCircleIcon sx={{ width: '3rem', height: '3rem' }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            className={styles.userMenu}
          >
            <AccountMenuItem path="/account/login" icon={<LoginIcon />} title="Login" />
            <Divider />
            <AccountMenuItem path="/account/register" icon={<RegisterIcon />} title="Register" />
          </Menu>
        </>
      )}
    </section>
  );
};
