import { Route, Routes } from 'react-router-dom';
import PublicScreens from '~/screens/public';
import { AccountScreens } from '~/screens/account';
import { UserScreens } from '~/screens/user';

function AllMainRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreens />} />
      <Route path="/account/*" element={<AccountScreens />} />
      <Route path="/user/*" element={<UserScreens />} />
    </Routes>
  );
}

export default AllMainRoutes;
