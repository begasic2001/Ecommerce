import { Routes, Route } from 'react-router-dom';
import { PublicScreen } from '~/screens/Public';

const route = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicScreen />} />
    </Routes>
  );
};

export default route;
