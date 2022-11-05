import React from 'react';
import { useState, useEffect } from 'react';

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
            {!loading &&
                patients.map(patient => <div className='flex justify-between mx-20 bg-gray-300 mt-10 p-10 rounded-xl font-bold text-lg'>
                    <p className=''>Date: {patient.date}</p>
                    <p className=''>Patient ID: {patient.patientID}</p>
                    <p className=''>Doctor ID: {patient.doctorID}</p>
                    <p className=''>diagnosed With: {patient.diagnosedWith}</p>
                    <p className=''>Blood Pressure: {patient.bloodPressure}</p>
                    <p className=''>Pulse Rate: {patient.pulseRate}</p>
                    <p className=''>Drug: {patient.drug}</p>
                    <p className=''>Unit: {patient.unit}</p>
                    <p className=''>Dosage: {patient.thingsToFollow}</p>
                </div>)
            }

        </div>

    );
};

export default MedicalRecords;