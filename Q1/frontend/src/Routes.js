// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './user/pages/UserLogin';
import UserRegister from './user/pages/UserRegister';
import UserDashboard from './user/pages/UserDashboard';
const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/"  element={<UserDashboard />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />

        {/* Default Route (404) */}
        {/* <Route path="/" element={() => <div>404 Not Found</div>} /> */}
      </Routes>
    </Router>
  );
};

export default PagesRoutes;
