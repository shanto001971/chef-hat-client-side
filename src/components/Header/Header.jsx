import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-5 border flex justify-around shadow-lg items-center p-5'>
            <h1>Make <span className='text-yellow-400'>Chef</span></h1>
            <div className=" flex gap-5">
                <NavLink className={({ isActive })=>isActive?"text-blue-600":''} to="/">Home</NavLink>
                <NavLink className={({ isActive })=>isActive?"text-blue-600":''} to="/blog">Blog</NavLink>
            </div>
            <img title='user Name' className='w-10' src={'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'} alt="" />
        </div>
    );
};

export default Header;