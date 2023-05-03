import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-7xl'>Oops!</h1>
            <img className='w-52 mx-auto' src="https://img.freepik.com/premium-vector/black-thin-line-sad-emoji-speech-bubble-logo-white-concept-abstract-symbol-dialogue-global-social-network-unusual-face-insulted-person-like-simple-sticker-emblem_117142-718.jpg?w=2000" alt="" />
            <h1 className='text-4xl'>404 Page not Found</h1>
            <p>A 404 is the response code that should be provided <br /> by your web server when a user attempts to access a URL that no <br /> longer exists/never existed or has been moved without any form of redirection</p>
            <Link
                to={'/'}
            >
                <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 w-40" >Go To Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;