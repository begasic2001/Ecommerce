import { Routes, Route } from 'react-router-dom';
import { PublicScreen } from '~/screens/public';
import { AccountScreens } from '~/screens/account';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreen />} />
      <Route path="/account/*" element={<AccountScreens />} />
    </Routes>
  );
};

export default AllRoutes;
