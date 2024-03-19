import React, { useState } from 'react'
import { deleteDoctorById } from './DoctorService'
export default function DeleteDoctor() {
    const [id, setId] = useState(0)
    function clickHandle(){
        deleteDoctorById(id).then(res=>console.log(res.data))
    }
  return (
    <>
    <br />
    <input type="text" placeholder='id' onChange={e=>setId(e.target.value)}/>
    <button onClick={clickHandle}>Delete</button>
    </>
  )
}
