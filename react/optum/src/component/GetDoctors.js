// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getAllDoctors,deleteDoctorById } from './DoctorService';
import Service from './Service';
import { Link, useNavigate } from 'react-router-dom';
export default function GetDoctors() {
    const [doctors, setDoctors]=useState([]);
    const navigate = useNavigate()
    // fetch('http://localhost:8081/api/doctors/')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // axios('http://localhost:8081/api/doctors/').then(res=>console.log(res.data))


    function doctorList(){
        getAllDoctors().then(res=>setDoctors(res.data)).catch(err=>console.log(err))
    }
    //uef sortcut


    useEffect(() => {
       doctorList()
    },[])

    function removeDoctor(id){
        deleteDoctorById(id).then(res=>{
            doctorList()
        })
        
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Doctors</h2>
        <Link to="/create-doctor" className='btn btn-primary mb-2'>Add Doctor</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    // doctors.map(doctor=>{// this curly braces makes issue for displaying data.
                    //     <tr key={doctor.id}>
                    //         <td>{doctor.id}</td>
                    //         <td>{doctor.name}</td>
                    //     </tr>
                    // })
                    doctors.map(
                        doctor=>
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>
                                <Link className='btn btn-info' to={`/update-doctor/${doctor.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={()=>removeDoctor(doctor.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    // <>
    // <br />
    // <button onClick={doctorList}>GetAllDoctors</button><br />
    // <table border={1}>
    //     <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //     </tr>
    // {doctors.map(doctor=>
    //     <tr key={doctor.id}>
    //         <td>{doctor.id}</td>
    //         <td>{doctor.name}</td>
    //     </tr>
    // )}
    // </table>
    // </>
    )
}
