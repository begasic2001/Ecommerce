import { Route, Routes } from 'react-router-dom';
import { PublicScreens } from '~/screens/public';

const AllMainRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreens />} />
    </Routes>
  );
};

export default AllMainRoutes;
