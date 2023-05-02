import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';

const Login = () => {
    
    const{loginUser, setUser,user}=useContext(AuthContex);
    const {errMassage,setErrMassage}=useState("");


    const handelLogin=(event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        loginUser(email,password)
        .then((result)=>{
            setUser(result.user);
            form.reset();

        })
        .catch((error)=>{
            console.log(error);
        })

        
        console.log(errMassage)


    }
    return (
        <div className="">
           
            <form onSubmit={handelLogin} className='text-center my-20 bg-slate-300 p-20'>
            <h1 className='text-3xl mb-4'>Login</h1>
                <div className="">
                    <input type="email" name='email' placeholder="Your Email" className="input w-full max-w-xs mt-10" />
                    <br />
                    <input type="password" name='password' placeholder="Password" className="input w-full max-w-xs mt-10" />
                    <br />
                    <button type="submit" className='btn btn-info w-40 mt-5'>Submit</button>

                    <p className='mt-2'>New to  <Link to="/ragister" className='link'>Ragister</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;