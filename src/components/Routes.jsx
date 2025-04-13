import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './pages/Page';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/literatura/:contentId' element={<Page />} />
    </Routes>
  );
}

export default AppRoutes;