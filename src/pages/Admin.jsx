import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import AdminSidebar from '../components/Admin/AdminSidebar';

const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        alert('Session expired or not logged in. Please log in again.');
        navigate('/admin/login');
        return;
      }

      const decoded = decodeToken(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (!decoded || decoded.exp < currentTime || decoded.role !== 'ADMIN') {
        alert('Invalid or expired session. Please log in again.');
        localStorage.removeItem('jwt_token');
        navigate('/admin/login');
      } else {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {/* Outlet renders nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
