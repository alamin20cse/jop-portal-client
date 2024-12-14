import React, { useContext } from 'react';
import { AuthContex } from '../Pages/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { div } from 'motion/react-client';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContex);
    const location=useLocation();
    if(user)
    {
        return children;
    }
    if(loading)
    {
       return  <span className="loading loading-spinner loading-lg"></span>
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;