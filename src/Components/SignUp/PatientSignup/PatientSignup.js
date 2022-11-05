import './PatientSignup.css';

import React from 'react';


const PatientSignup = () => {
    return (
        <div className='patient-signup'>
            <h1 className='text-center p-10 text-5xl font-bold'>Patient Signup</h1>
            <div className="login-form w-1/4 h-1/2 m-auto mt-10">
                <form>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>First Name: </p>
                        <input type="text" placeholder="First name" name='fname' className="input w-3/4 mb-5" />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>Last Name: </p>
                        <input type="text" placeholder="Last name" name='lname' className="input w-3/4 mb-5" />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>NID: </p>
                        <input type="text" placeholder="NID number and upload NID" name='nid' className="input w-4/5 mb-5" />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='mb-3 text-xl'>Date of Birth: </p>
                        <input type="text" placeholder="DD/ MM/ YYYY" name='dob' className="input w-3/5 mb-5" />
                    </label>
                    <div className='flex justify-center mt-5'>
                        <button className="btn login-btn w-full">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientSignup;