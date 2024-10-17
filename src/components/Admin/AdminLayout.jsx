import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar'; // Sidebar component

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 m-0 p-0"> {/* Remove margins and padding */}
      {/* Sidebar on the left */}
      <div className="w-80 bg-white shadow-md min-h-screen border-r border-gray-200"> {/* Increased width to w-80 */}
        <AdminSidebar />
      </div>

      {/* Content on the right */}
      <div className="flex-1 bg-gray-50 m-0 p-0"> {/* Remove margins and padding from content */}
        <Outlet /> {/* This is where child routes like /dashboard will be rendered */}
      </div>
    </div>
  );
};

export default AdminLayout;
