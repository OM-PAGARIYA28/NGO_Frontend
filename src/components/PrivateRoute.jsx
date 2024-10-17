import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Assuming you have a way to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('jwt_token'); // Check if JWT token exists
  return !!token; // Returns true if token exists, false otherwise
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
