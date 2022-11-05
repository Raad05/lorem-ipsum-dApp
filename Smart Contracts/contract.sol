//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HealthRecord {
    PatientRecord[] private record;
    struct PatientRecord {
        string patientID;
        string doctorID;
        string date;
        string diagnosedWith;
        string bloodPressure;
        string pulseRate;
        string drug;
        string unit;
        string thingsToFollow;
    }
    function healthRecordStore(
        string memory _patientID,
        string memory _doctorID,
        string memory _date,
        string memory _diagnosedWith,
        string memory _bloodPressure,
        string memory _pulseRate,
        string memory _drug,
        string memory _unit,
        string memory _thingsToFollow
    ) public {
        record.push(
            PatientRecord(
                _patientID,
                _doctorID,
                _date,
                _diagnosedWith,
                _bloodPressure,
                _pulseRate,
                _drug,
                _unit,
                _thingsToFollow
            )
        );
    }
    function healthRecordGet() public returns(
        PatientRecord[] memory) {
        uint256 numberOfPatients = record.length;
        PatientRecord[] memory allPatients = new PatientRecord[](numberOfPatients);
        for (uint256 index = 0; index < numberOfPatients; index++) {
            PatientRecord storage patient = record[index];
            allPatients[index] = patient;
        }
        return allPatients;
    }
}
