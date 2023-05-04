import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';

const PraivetRoute = ({ children }) => {
    const { user } = useContext(AuthContex);
    // console.log(user)
    const location = useLocation();


    if (!user) {
        return  <Navigate state={{from: location}} to="/login" replace ></Navigate>;
    }
    return  children;
};

export default PraivetRoute;