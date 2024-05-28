import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth, component: Component }) => {
  return isAuth ? <Component /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
