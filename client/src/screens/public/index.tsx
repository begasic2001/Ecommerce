import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { HomePage, ProductDetailPage, ProductsPage, SearchProductsPage } from '~/pages/public';

const publicRoutes = [
  { path: '/home', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:productId', component: ProductDetailPage },
  { path: '/search', component: SearchProductsPage },
];

function PublicScreens() {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        const Page = route.component;
        return <Route key={uuidv4()} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default PublicScreens;
