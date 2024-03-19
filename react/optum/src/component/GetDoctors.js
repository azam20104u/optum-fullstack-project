// import axios from 'axios'
import React, { useState } from 'react'
import { getAllDoctors } from './DoctorService';
export default function GetDoctors() {
    // fetch('http://localhost:8081/api/doctors/')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // axios('http://localhost:8081/api/doctors/').then(res=>console.log(res.data))

    const[doctors, setDoctors]=useState([]);
    function doctorList(){
        getAllDoctors().then(res=>setDoctors(res.data))
        console.log(doctors);
    }
  return (
    <>
    <br />
    <button onClick={doctorList}>GetAllDoctors</button><br />
    <table border={1}>
        <tr>
            <th>Id</th>
            <th>Name</th>
        </tr>
    {doctors.map(doctor=>
        <tr key={doctor.id}>
            <td>{doctor.id}</td>
            <td>{doctor.name}</td>
        </tr>
    )}
    </table>
    </>
    )
}
