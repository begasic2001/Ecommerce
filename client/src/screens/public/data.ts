import { v4 as uuidv4 } from 'uuid';
import { Homepage } from '~/pages/public/home';
import { ProductDetailPage } from '~/pages/public/product-detail';
import { ProductsPage } from '~/pages/public/products';
import { IPublicRoutes } from './interface';

export const publicRoutes: IPublicRoutes[] = [
  { id: uuidv4(), path: '/home', component: Homepage },
  { id: uuidv4(), path: '/products', component: ProductsPage },
  { id: uuidv4(), path: '/products/:productId', component: ProductDetailPage },
];
