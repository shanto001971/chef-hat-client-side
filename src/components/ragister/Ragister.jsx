import React, { useContext, useState } from 'react';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { Link, Navigate } from 'react-router-dom';


const Ragister = () => {

    const { createUser, setUser, profileUpgrade } = useContext(AuthContex)

    const [massage, setMassage] = useState('');

    const [errors, setErrors] = useState('');

    const handelRagister = (event) => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;
        if (!password === confirmPassword) {
            setErrors('password dosnt match')
            return
        }
        if (password.length < 6) {
            setErrors("password mast be 6 character")
            return
        }
        setUser({})
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setErrors('')
                setMassage('Go to Login')
                form.reset()


            })
            .catch((error) => {
                setErrors(error.message)
            })

        profileUpgrade(name, photo)
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.log(err.message)
            })




    }




    return (
        <div className="mt-2 text-center">
            <p className='text-5xl m-5'></p>
            <form onSubmit={handelRagister} className='text-center  bg-slate-300 p-20'>
                <h1 className='text-3xl mb-4'>Ragister</h1>
                <div className="">
                    <input type="text" name='name' placeholder="Your Name" className="input w-full max-w-xs border border-spacing-11 " />
                    <br />
                    <input type="email" name='email' placeholder="Your Email" className="input w-full max-w-xs mt-10" required />
                    <br />
                    <input type="password" name='password' placeholder="Password" className="input w-full max-w-xs mt-10" required />
                    <br />
                    <input type="Password" name='confirmPassword' placeholder="Confirm Password" className="input w-full max-w-xs mt-10" required />
                    <br />
                    <input type="text" name='photo' placeholder="Photo Url" className="input w-full max-w-xs mt-10" />
                    <br />
                    <div className="text-center mb-5 text-red-500 mt-5">
                        <p>{errors}</p>
                    </div>
                    <p>{massage}</p>
                    <button type="submit" className='btn btn-info w-40 mt-5'>Submit</button>

                    <p className='mt-2'>Alrady have a accoutn <Link to="/login" className='link'>Login</Link></p>

                </div>
            </form>

        </div>
    );
};

export default Ragister;