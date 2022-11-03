import './DoctorPage.css';

import React from 'react';

const DoctorPage = () => {
    return (
        <div className='doctor-page'>
            <div className="grid grid-cols-3">
                <div className="doctor-profile">
                    <div className='doctor-info w-4/5 m-auto p-12 mt-16 rounded'>
                        <div className='identity'>
                            <h1 className='text-5xl text-center font-bold'>Dr. Sumon</h1>
                            <p className='text-xl text-center my-5 px-16'>Dr. Sumon Chowdhury MBBS, FCPS (DMC)</p>
                        </div>
                    </div>
                    <div className='w-4/5 m-auto p-12 mt-16 rounded'>
                        <div className='text-center'>
                            <button className="btn-patient-list btn mx-3 font-bold block w-full h-40 text-xl mb-10 border-none">Add Patient</button>
                            <button className="btn-patient-list btn mx-3 font-bold block w-full h-40 text-xl mb-10 border-none">View All Patients</button>
                        </div>
                    </div>
                </div>
                <div className="patient-list col-span-2 mt-16 mx-20">
                    <h3 className='title text-3xl text-center font-bold py-5 rounded'>My Patients</h3>
                    <div className="patients">
                        <div className="flex justify-between items-center px-10 mt-5">
                            <div className='details '>
                                <p className='text-lg'><span className='font-bold'>Name: </span>Sampad Sulaiman</p>
                                <p className='text-lg'><span className='font-bold'>Age: </span>22</p>
                                <p className='text-lg'><span className='font-bold'>Problem: </span>Ulcer</p>
                            </div>
                            <button className='btn-view-patient btn w-32 h-20 border-none'>View Patient Profile</button>
                        </div>
                        <hr className='mt-5' />
                        <div className="flex justify-between items-center px-10 mt-5">
                            <div className='details '>
                                <p className='text-lg'><span className='font-bold'>Name: </span>Bobby</p>
                                <p className='text-lg'><span className='font-bold'>Age: </span>22</p>
                                <p className='text-lg'><span className='font-bold'>Problem: </span>Sore Throat</p>
                            </div>
                            <button className='btn-view-patient btn w-32 h-20 border-none'>View Patient Profile</button>
                        </div>
                        <hr className='mt-5' />
                        <div className="flex justify-between items-center px-10 mt-5">
                            <div className='details '>
                                <p className='text-lg'><span className='font-bold'>Name: </span>Momen Fahmid</p>
                                <p className='text-lg'><span className='font-bold'>Age: </span>18</p>
                                <p className='text-lg'><span className='font-bold'>Problem: </span>Diabetes</p>
                            </div>
                            <button className='btn-view-patient btn w-32 h-20 border-none'>View Patient Profile</button>
                        </div>
                        <hr className='mt-5' />
                        <div className="flex justify-between items-center px-10 mt-5">
                            <div className='details '>
                                <p className='text-lg'><span className='font-bold'>Name: </span>Karen Khatun</p>
                                <p className='text-lg'><span className='font-bold'>Age: </span>32</p>
                                <p className='text-lg'><span className='font-bold'>Problem: </span>Cancer</p>
                            </div>
                            <button className='btn-view-patient btn w-32 h-20 border-none'>View Patient Profile</button>
                        </div>
                        <hr className='mt-5' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;