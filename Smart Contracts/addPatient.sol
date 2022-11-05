//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract patientDoctor{
    DoctorLinked[] private doctorLinks;
    struct DoctorLinked{
        string doctorID;
        string patientID;
    }
      function healthRecordStore(
        string memory _patientID,
        string memory _doctorID,
    ) public {
        record.push(
            PatientRecord(
                _patientID,
                _doctorID,
            )
        );
    }
    function healthRecordStore() public returns(
        DoctorLinked[] memory) {
        return DoctorLinked;
    }
}