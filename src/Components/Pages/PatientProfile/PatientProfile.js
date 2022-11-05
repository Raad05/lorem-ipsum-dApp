import './PatientProfile.css';
import React, { useEffect, useState } from 'react';

const PatientProfile = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = 'http://127.0.0.1:5000/api/v1/namespaces/default/apis/ipsum_lorem/query/healthRecordGet';
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                input: {},
                "options": {}
            })
        })
            .then(res => res.json())
            .then(data => {
                setPatients(data.output);
                setLoading(false);
            });
    }, [])

    const handleUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const diagnosis = form.diagnosis.value;
        const bp = form.bp.value;
        const pulse = form.pulse.value;
        const drug = form.drug.value;
        const unit = form.unit.value;
        const dosage = form.dosage.value;

        fetch('http://127.0.0.1:5000/api/v1/namespaces/default/apis/ipsum_lorem/invoke/healthRecordStore', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                input: {
                    "_patientID": "20101172",
                    "_doctorID": "1234567",
                    "_date": date,
                    "_diagnosedWith": diagnosis,
                    "_bloodPressure": bp,
                    "_pulseRate": pulse,
                    "_drug": drug,
                    "_unit": unit,
                    "_thingsToFollow": dosage
                },
                "options": {}
            })
        });
        console.log('Posted');
    }

    const authInfo = { patients };
    console.log(authInfo.patients);

    return (
        <div className='patient-profile'>
            <h1 className='font-bold text-center text-5xl mt-5'>Patient Profile</h1>
            <h3 className='text-3xl mx-20 mt-5'><span className='font-bold'>#Patient name: </span>Sampad Sulaiman</h3>
            <div className="grid grid-cols-3 mt-16 ml-20">
                <div>
                    <div className='personal-info bg-info mr-20 p-10 rounded'>
                        <h3 className='font-bold text-2xl mb-5'>Personal info:</h3>
                        <p className='text-lg'>Age: 22</p>
                        <p className='text-lg'>Gender: Male</p>
                        <p className='text-lg'>Blood Group: A+</p>
                    </div>
                    <div className="patient-history bg-info mr-20 p-10 mt-20 rounded">
                        <h3 className='font-bold text-2xl mb-5'>Patient History:</h3>
                        <div className="grid grid-cols-2">
                            <p className='history px-10 py-5 bg-gray-100 m-5 text-center rounded-lg text-lg'>Immunization History</p>
                            <p className='history px-10 py-5 bg-gray-100 m-5 text-center rounded-lg text-lg'>Family History</p>
                            <p className='history px-10 py-5 bg-gray-100 m-5 text-center rounded-lg text-lg'>Surgery History</p>
                            <p className='history px-10 py-5 bg-gray-100 m-5 text-center rounded-lg text-lg'>Obstretic History</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-info mr-20 rounded">
                    <form onSubmit={handleUpload}>
                        <div className='patient-description p-10'>
                            <div className='flex items-center justify-between my-5'>
                                <p className='mr-10 text-lg font-bold'>Date: </p>
                                <input type="text" name='date' placeholder="20/10/22" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='flex items-center my-5 justify-between'>
                                <p className='mr-10 text-lg font-bold'>Diagnosed With: </p>
                                <input type="text" name='diagnosis' placeholder="High Fever" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='flex items-center my-5 justify-between'>
                                <p className='mr-10 text-lg font-bold'>Blood Pressure: </p>
                                <input type="text" name='bp' placeholder="Low" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='flex items-center my-5 justify-between'>
                                <p className='mr-10 text-lg font-bold'>Pulse Rate: </p>
                                <input type="text" name='pulse' placeholder="80" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='flex items-center my-5 justify-between'>
                                <p className='mr-10 text-lg font-bold'>Drug: </p>
                                <input type="text" name='drug' placeholder="Napa" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='flex items-center my-5 justify-between'>
                                <p className='mr-10 text-lg font-bold'>Unit: </p>
                                <input type="text" name='unit' placeholder="500 mg" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='flex items-center my-5 justify-between'>
                                <p className='mr-10 text-lg font-bold'>Dosage: </p>
                                <input type="text" name='dosage' placeholder="N/A" className="input input-bordered w-full max-w-xs mr-80" />
                            </div>
                            <div className='text-right'>
                                <button type="submit" className='btn btn-primary'>Upload</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* {
                !loading &
                <AuthContext.Provider value={authInfo}>
                    <MedicalRecords></MedicalRecords>
                </AuthContext.Provider>
            } */}
            {/* {
                !loading &&
                patients.map(patient => console.log(patient.diagnosedWith))
            } */}


        </div>
    );
};

export default PatientProfile;