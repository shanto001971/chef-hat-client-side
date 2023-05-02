import React, { useContext, useState } from 'react';
import { AuthContex } from '../AuthProvaiders/AuthProvaider';
import { Link } from 'react-router-dom';

const Ragister = () => {

    const { createUser } = useContext(AuthContex)
    const [errors, setErrors] = useState('')

    const handelRagister = (event) => {
        event.preventDefault();
        
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (!password == confirmPassword) {
            setErrors('password dosnt match')
            return
        }
        if (password.length < 6) {
            setErrors("password mast be 6 character")
            return
        }
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset()
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="">
            <form onSubmit={handelRagister} className='text-center my-20 bg-slate-300 p-20'>
                <div className="">
                    <input type="text" name='name' placeholder="Your Name" className="input w-full max-w-xs border border-spacing-11 " />
                    <br />
                    <input type="email" name='email' placeholder="Your Email" className="input w-full max-w-xs mt-10" />
                    <br />
                    <input type="password" name='password' placeholder="Password" className="input w-full max-w-xs mt-10" />
                    <br />
                    <input type="Password" name='confirmPassword' placeholder="Confirm Password" className="input w-full max-w-xs mt-10" />
                    <br />
                    
                    <button type="submit" className='btn btn-info w-40 mt-5'>Submit</button>

                    <p className='mt-2'>Alrady have a accoutn <Link to="/login" className='link'>Login</Link></p>
                </div>
            </form>
            <p>{errors}</p>
        </div>
    );
};

export default Ragister;