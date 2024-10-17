import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/Admin/AdminSidebar';

// Function to decode the JWT token manually
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
        navigate('/admin/login'); 
        return;
      }

      const decoded = decodeToken(token); 

      if (!decoded || decoded.role !== 'ADMIN') {
        navigate('/admin/login'); 
      } else {
        setLoading(false); 
      }
    };

    verifyAdmin();
  }, [navigate]);

  if (loading) return <p>Loading...</p>; 

  return (
    <>
      <AdminSidebar />
      <h1>Welcome to the Admin Panel</h1>
      {/* Add more admin-related content here */}
    </>
  );
};

export default Admin;
