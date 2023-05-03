import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { loginUser, setUser, user, googleSingIn, githubLogin } = useContext(AuthContex);
    const { errMassage, setErrMassage } = useState("");


    const handelLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then((result) => {
                setUser(result.user);
                form.reset();

            })
            .catch((error) => {
                console.log(error);
            })




    }
    const githubLoginProvider = () => {
        githubLogin()
            .then((result) => {
                setUser(result.user)
            })
            .catch((err) => {
                setErrMassage(err.message)
            })
    }


    const googleRagister = () => {
        googleSingIn()
            .then((result) => {
                console.log(result.user)
            })
            .catch((err) => {
                console.log(err.message)
            })
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
            <div className="">
                <p>{ errMassage}</p>
            </div>
            <div className="">
                <button onClick={googleRagister} className='flex gap-2 items-center justify-center mx-auto border p-2 rounded'><FaGoogle /> Login With Google</button>
                <button onClick={githubLoginProvider} className='flex gap-2 items-center justify-center mx-auto mt-3 border p-2 rounded'><FaGithub /> Login With Github</button>
            </div>

        </div>
    );
};

export default Login;