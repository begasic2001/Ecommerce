import { Routes, Route } from 'react-router-dom';
import { PublicScreen } from '~/screens/public';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreen />} />
    </Routes>
  );
};

export default AllRoutes;
