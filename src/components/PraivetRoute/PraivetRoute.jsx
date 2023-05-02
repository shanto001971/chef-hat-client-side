import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { Navigate } from 'react-router-dom';

const PraivetRoute = ({ children }) => {
    const { user } = useContext(AuthContex);
    // console.log(user)


    if (user) {
        return <Navigate to="/ragister" />
    }
    return children
};

export default PraivetRoute;