import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);
    // console.log(user)

    return (
        <div className=' mb-5 shadow-lg '>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/blog">Blog</NavLink>
                        </ul>
                    </div>
                    <h1 className='text-3xl'>Chef <span className='text-yellow-400'>Hat</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex gap-5">
                    <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/blog">Blog</NavLink>

                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex gap-3'>

                            <img title={user?.displayName} className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                            <button onClick={() => logOut()} className="btn btn-primary">Logout</button>
                        </div>
                            : <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;