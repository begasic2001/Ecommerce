import { Route, Routes } from 'react-router-dom';
import { PublicScreens } from '~/screens/public';
import { AccountScreens } from '~/screens/account';

function AllMainRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreens />} />
      <Route path="/account/*" element={<AccountScreens />} />
    </Routes>
  );
}

export default AllMainRoutes;
