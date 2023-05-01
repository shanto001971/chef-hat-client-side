import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const HomeLayout = () => {
    return (
        <div className=' border lg:mx-20'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;