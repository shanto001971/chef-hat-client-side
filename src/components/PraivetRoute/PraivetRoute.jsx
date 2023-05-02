import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { Navigate } from 'react-router-dom';

const PraivetRoute = ({ children }) => {
    const { user } = useContext(AuthContex);
    // console.log(user)


    if (!user) {
        return children;
    }
    return  <Navigate to="/ragister" ></Navigate>
};

export default PraivetRoute;