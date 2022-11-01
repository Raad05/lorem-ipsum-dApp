import './DoctorSignup.css';

import React from 'react';

const DoctorSignup = () => {
    return (
        <div className='doctor-signup'>
            <h1 className='text-center p-10 text-5xl font-bold'>Doctor Signup</h1>
            <div className="login-form w-1/4 h-1/2 m-auto mt-10">
                <form>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>Name: </p>
                        <input type="text" placeholder="Full name" className="input w-3/4 mb-5" />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>Registration Number: </p>
                        <input type="text" placeholder="Registration number" className="input w-3/4 mb-5" />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>Medical License Number: </p>
                        <input type="text" placeholder="Medical License Number and upload license" className="input w-4/5 mb-5" />
                    </label>
                    <div className='flex justify-center mt-5'>
                        <button className="btn login-btn w-full">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorSignup;