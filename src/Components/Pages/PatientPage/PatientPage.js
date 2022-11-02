import './PatientPage.css';

import React from 'react';

const PatientPage = () => {
    return (
        <div className='patient-page'>
            <div className='grid grid-cols-3'>
                <div className='patient-profile'>
                    <div className='patient-info w-4/5 bg-slate-400 m-auto p-12 mt-16 rounded'>
                        <div className='identity'>
                            <h1 className='text-5xl text-center font-bold'>Shakib Al Hasan</h1>
                            <p className='text-xl text-center my-5 px-16'>Blockchain Developer Bangladesh</p>
                        </div>
                        <div className='btn-patient-info text-center'>
                            <button className="btn btn-info mx-3 font-bold">Follow</button>
                            <button className="btn btn-info mx-3 font-bold">Message</button>
                        </div>
                    </div>
                    <div className='doctors w-4/5 m-auto p-12 mt-16 rounded'>
                        <div className='identity'>
                            <h1 className='text-3xl font-bold'>Current Doctors</h1>
                            <p className='text-lg my-5'>Dr. Fahmid</p>
                            <hr />
                            <p className='text-lg my-5'>Dr. Boby</p>
                            <hr />
                            <p className='text-lg my-5'>Dr. Miraj</p>
                            <hr />
                            <div className='doctors'>
                                <p className='text-xl text-center my-5 px-16'></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 px-16 mt-16'>
                    <div className="patient-profile">
                        <div className="patient-details w-full m-auto p-12 mb-16 rounded">
                            <p className='text-lg my-5'><span className='font-bold'>Full name: </span> Shakib Al Hasan</p>
                            <hr />
                            <p className='text-lg my-5'><span className='font-bold'>Email: </span> alhasan024@gmail.com</p>
                            <hr />
                            <p className='text-lg my-5'><span className='font-bold'>Phone: </span> 01345678911</p>
                            <hr />
                            <p className='text-lg my-5'><span className='font-bold'>Address: </span> Gulshan-2, Dhaka-1212, Bangladesh</p>
                            <hr />
                        </div>
                        <div className="features flex justify-evenly">
                            <div className='feature w-60 h-60 rounded p-10 text-3xl font-bold'>
                                <p>Medical Records</p>
                                <button className="view-btn btn mx-3 font-bold mt-14 ml-20 w-24 border-none">View</button>
                            </div>
                            <div className='feature w-60 h-60 rounded p-10 text-3xl font-bold'>
                                <p>Trusted Contacts</p>
                                <button className="view-btn btn mx-3 font-bold mt-14 ml-20 w-24 border-none">View</button>
                            </div>
                            <div className='feature w-60 h-60 rounded p-10 text-3xl font-bold'>
                                <p>Authorize</p>
                                <button className="view-btn btn mx-3 font-bold mt-20 ml-20 w-24 border-none">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientPage;