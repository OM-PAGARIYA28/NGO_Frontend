import React from 'react';
import { Route, Navigate } from 'react-router-dom';

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

// Function to check if the user is authenticated and has admin role
const isAuthenticated = () => {
  const token = localStorage.getItem('jwt_token');
  if (!token) return false; // Token not present

  const decoded = decodeToken(token);
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  return decoded && decoded.exp > currentTime && decoded.role === 'ADMIN'; // Valid and admin
};

// Private route component to protect admin routes
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
