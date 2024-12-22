import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouteForAdmin = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user')); 

    if (user?.role === 'admin') {
        return children;
    } else {
        return <Navigate to={'/auth'} />;
    }
};

export default ProtectedRouteForAdmin
