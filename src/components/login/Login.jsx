import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { loginUser, setUser, user, googleSingIn, githubLogin } = useContext(AuthContex);
    const [errMassage, setErrMassage] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const handelLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                setUser(result.user);
                form.reset();
                navigate( from, {replace: true})

            })
            .catch((error) => {
                setErrMassage(error.message);
            })
    }


    const githubLoginProvider = () => {
        githubLogin()
            .then((result) => {
                setUser(result.user);
                setErrMassage('')
            })
            .catch((err) => {
                console.log(err.message);
                setErrMassage(err.message)
            })
    }


    const googleRagister = () => {
        googleSingIn()
            .then((result) => {
                setUser(result.user)
                setErrMassage('')
            })
            .catch((err) => {
                setErrMassage(err.message)
            })
    }
    return (
        <div className="bg-slate-300 p-20">
            
            <form onSubmit={handelLogin} className='text-center my-20 '>
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
            <div className="text-center mb-5 text-red-500">
                <p>{errMassage}</p>
            </div>
            <div className="">
                <button onClick={googleRagister} className='flex gap-2 items-center justify-center mx-auto border p-2 rounded hover:bg-blue-400'><FaGoogle /> Login With Google</button>
                <button onClick={githubLoginProvider} className='flex gap-2 items-center justify-center mx-auto mt-3 border p-2 rounded hover:bg-blue-400'><FaGithub /> Login With Github</button>
            </div>

        </div>
    );
};

export default Login;