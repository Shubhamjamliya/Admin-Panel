import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import module routes
import AdminRoutes from '../modules/admin/routes';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route - redirect to admin */}
      <Route path="/" element={<Navigate to="/admin" replace />} />

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRoutes;


