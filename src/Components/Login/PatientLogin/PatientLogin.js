import './PatientLogin.css';

import React from 'react';
import { Link } from 'react-router-dom';

const PatientLogin = () => {
    return (
        <div className='patient-login'>
            <h1 className='text-center p-10 text-5xl font-bold'>Patient Login</h1>
            <div className="login-form w-1/4 h-1/2 m-auto mt-10">
                <form>
                    <label>
                        <p className='mb-3 text-xl'>Username</p>
                        <input type="text" placeholder="Username" className="input w-full mb-5" />
                    </label>
                    <label>
                        <p className='mb-3 text-xl'>Password</p>
                        <input type="password" placeholder="Password" className="input w-full mb-3" />
                    </label>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                            <input type="checkbox" className="checkbox bg-white mr-2" />
                            <p className='text-xl'>Remember me</p>
                        </div>
                        <button className="btn btn-link text-md">Forgot password?</button>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <Link to='/patient-page' className='w-full'><button className="btn login-btn w-full">Login</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientLogin;