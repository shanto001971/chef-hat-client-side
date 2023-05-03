import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    return (
        <div className=' border flex justify-between shadow-lg items-center p-5'>
            <h1 className='text-3xl'>Chef <span className='text-yellow-400'>Hat</span></h1>
            <div className=" flex gap-5">
                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/blog">Blog</NavLink>
            </div>
            {
                user ? <div className='flex gap-3'>
                    <img title='user Name' className='w-10' src={'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'} alt="" />
                    <button onClick={() => logOut()} className="btn btn-primary">Logout</button>
                </div>
                    : <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            }
        </div>
    );
};

export default Header;