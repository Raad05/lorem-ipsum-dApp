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
                            <button className="btn-patient-list btn mx-3 font-bold block w-full h-40 text-xl mb-10">Add Patient</button>
                            <button className="btn-patient-list btn mx-3 font-bold block w-full h-40 text-xl mb-10">View All Patients</button>
                        </div>
                    </div>
                </div>
                <div className="patient-list col-span-2">
                    sdfj
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;