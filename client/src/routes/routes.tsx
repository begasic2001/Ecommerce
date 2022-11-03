import { Route, Routes } from 'react-router-dom';
import { PublicScreens } from '~/screens/public';

function AllMainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreens />} />
    </Routes>
  );
}

export default AllMainRoutes;
