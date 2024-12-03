import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';
import ProtectedRoute from '../components/admin/ProtectedRoute';
import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import Analytics from '../pages/admin/Analytics';
import DonationsList from '../pages/admin/DonationsList';

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Public admin routes */}
      <Route path="/admin/login" element={<Login />} />

      {/* Protected admin routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="donations" element={<DonationsList />} />
                {/* Redirect /admin to /admin/dashboard */}
                <Route path="" element={<Navigate to="/admin/dashboard" replace />} />
                {/* Catch all other admin routes and redirect to dashboard */}
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
              </Routes>
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;