import React from 'react'
import { useState } from 'react'
import { updateDoctorById } from './DoctorService'
export default function UpdateDoctor() {
    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    function updateRecord(){
       const doctor = {id,name}
       updateDoctorById(id,doctor).then(res=>console.log(res.data))
    }
  return (
    <>
    <input type="text" placeholder='id' onChange={e=>setId(e.target.value)}/>
    <input type="text" placeholder='name' onChange={e=>setName(e.target.value)}/>
    <button onClick={updateRecord}>update</button>
    </>
  )
}
