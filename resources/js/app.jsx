import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardLayout from './components/layouts/DashboardLayout';

if (document.getElementById('react-dashboard')) {
  ReactDOM.createRoot(document.getElementById('react-dashboard')).render(
    <React.StrictMode>
      <DashboardLayout />
    </React.StrictMode>
  );
}
