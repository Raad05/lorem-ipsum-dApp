import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='sign-up relative'>
            <div className="w-1/4 bg-black/50  text-white absolute right-40 top-40 px-10 pb-20 rounded">
                <h1 className='font-bold text-3xl my-10 text-center'>SIGN UP AS</h1>
                <Link to='/patient-signup'><button className='w-full btn-signup font-bold block m-auto py-5 text-2xl mb-10 rounded'>Patient</button></Link>
                <Link to='/doctor-signup'><button className='w-full btn-signup font-bold block m-auto py-5 text-2xl mb-10 rounded'>Doctor</button></Link>
                <button className='w-full btn-signup font-bold block m-auto py-5 text-2xl mb-10 rounded'>Diagnostic Center</button>
                <button className='w-full btn-signup font-bold block m-auto py-5 text-2xl mb-10 rounded'>Insurance</button>
            </div>
        </div>
    );
};

export default SignUp;