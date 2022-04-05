import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
  
const PrivateRoute = ({ Component }) => {
  const { userAddress } = useContext(AppContext);

  return userAddress ? <Component /> : <Navigate replace to="/sign-in" />;
}

export default PrivateRoute;