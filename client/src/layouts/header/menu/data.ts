import {
  Article as ArticleIcon,
  Category as CategoryIcon,
  Home as HomeIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import { IMenuLink, IMenuLinkDrawer } from './interface';

export const navLinkDrawer: IMenuLinkDrawer[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home', icon: HomeIcon },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products', icon: CategoryIcon },
  { id: uuidv4(), name: 'Blog', path: '/blog', icon: ArticleIcon },
];

export const accountLinkDrawer: IMenuLinkDrawer[] = [
  { id: uuidv4(), name: 'Đăng nhập', path: '/account/login', icon: LoginIcon },
  { id: uuidv4(), name: 'Đăng ký', path: '/account/register', icon: LogoutIcon },
];

export const navLink: IMenuLink[] = [
  { id: uuidv4(), name: 'Trang chủ', path: '/home' },
  { id: uuidv4(), name: 'Sản phẩm', path: '/products' },
  { id: uuidv4(), name: 'Blog', path: '/blog' },
];
