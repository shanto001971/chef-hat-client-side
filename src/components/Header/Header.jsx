import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);
    // console.log(user)

    return (
        <div className=' border flex justify-between shadow-lg items-center p-5'>
            <h1 className='text-3xl'>Chef <span className='text-yellow-400'>Hat</span></h1>
            <div className=" flex gap-5">
                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to="/blog">Blog</NavLink>
            </div>
            {
                user ? <div className='flex gap-3'>

                    <img title={user?.displayName} className='w-10 bg-slate-400 rounded-full' src={user?.photoURL || "https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg"} alt="" />
                    <button onClick={() => logOut()} className="btn btn-primary">Logout</button>
                </div>
                    : <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            }
        </div>
    );
};

export default Header;