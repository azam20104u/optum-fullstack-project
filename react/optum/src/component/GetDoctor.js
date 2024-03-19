import React, { useState } from 'react'
import { getDoctorById } from './DoctorService'
export default function GetDoctor() {
    const [id,setId]= useState(0)
    const [doctor,setDoctor] = useState({});
    function handleClick(){
        getDoctorById(id).then(res=>setDoctor(res.data))
        console.log(doctor);
    }
  return (
    <>
    <br />
    <input type="text" placeholder='enter id' onChange={e=>setId(e.target.value)}/>
    <button onClick={handleClick}>GetDoctorById</button>
    {doctor.name}
    </>
  )
}
