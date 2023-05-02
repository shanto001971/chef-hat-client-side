import React from 'react';

const Ragister = () => {


    const handelRagister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const confromPassword=form.confromPassword.value;
        console.log(name,email,password,confromPassword)
    }
    return (
        <form onSubmit={handelRagister} className='text-center my-20 bg-slate-300 p-20'>
            <div className="">
            <input type="text" name='name' placeholder="Your Name" className="input w-full max-w-xs border border-spacing-11 " />
            <br />
            <input type="email" name='email' placeholder="Your Email" className="input w-full max-w-xs mt-10" />
            <br />
            <input type="password" name='password' placeholder="Password" className="input w-full max-w-xs mt-10" />
            <br />
            <input type="Password" name='confromPassword' placeholder="Conform Password" className="input w-full max-w-xs mt-10" />
            <br />
            <button type="submit" className='btn btn-info w-40 mt-5'>Submit</button>
            </div>
        </form>
    );
};

export default Ragister;