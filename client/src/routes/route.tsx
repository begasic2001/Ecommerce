import { Routes, Route } from 'react-router-dom';
import { PagePublic } from '~/pages/Public';

const route = () => {
  return (
    <Routes>
      <Route path="/*" element={<PagePublic />} />
    </Routes>
  );
};

export default route;
