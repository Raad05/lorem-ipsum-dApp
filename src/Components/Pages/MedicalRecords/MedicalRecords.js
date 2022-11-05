import React from 'react';
import { useState, useEffect } from 'react';
import './MedicalRecords.css';

const MedicalRecords = () => {
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

    return (
        <div className='medical-records'>
            <h1 className='font-bold text-center text-5xl my-10'>Patient Profile</h1>
            {!loading &&
                patients.map(patient => <div className='patient flex justify-between mx-28 bg-gray-300 mt-10 p-10 rounded-xl font-bold text-xl text-white'>
                    <p className='p-5'>Date: {patient.date}</p>
                    <p className='p-5'>Patient ID: {patient.patientID}</p>
                    <p className='p-5'>Doctor ID: {patient.doctorID}</p>
                    <p className='p-5'>diagnosed With: {patient.diagnosedWith}</p>
                    <p className='p-5'>Blood Pressure: {patient.bloodPressure}</p>
                    <p className='p-5'>Pulse Rate: {patient.pulseRate}</p>
                    <p className='p-5'>Drug: {patient.drug}</p>
                    <p className='p-5'>Unit: {patient.unit}</p>
                    <p className='p-5'>Dosage: {patient.thingsToFollow}</p>
                </div>)
            }

        </div>

    );
};

export default MedicalRecords;