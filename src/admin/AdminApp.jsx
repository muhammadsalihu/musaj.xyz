import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminProvider, useAdmin } from './AdminContext';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import Overview from './pages/Overview';
import ProjectsManager from './pages/ProjectsManager';
import BlogManager from './pages/BlogManager';
import AgentsManager from './pages/AgentsManager';

const AdminRoutes = () => {
  const { auth } = useAdmin();
  if (!auth) return <AdminLogin />;
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Overview />} />
        <Route path="projects" element={<ProjectsManager />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="agents" element={<AgentsManager />} />
      </Route>
    </Routes>
  );
};

const AdminApp = () => (
  <AdminProvider>
    <AdminRoutes />
  </AdminProvider>
);

export default AdminApp;
