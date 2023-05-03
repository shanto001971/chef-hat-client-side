import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div className=' border lg:mx-20'>
            <Header/>
            <Outlet/>
            <Toaster />
            <Footer/>
        </div>
    );
};

export default HomeLayout;