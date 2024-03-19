import React, { useState } from 'react'
import { saveDoctor } from './DoctorService'
export default function CreateDoctor() {
    // const [id,setId]=useState(0)
    // const [name,setName]=useState('')
    const [doctor,setDoctor] = useState({id:0,name:''})
    function saveRecord(){
    //    const doctor = {id,name}
       saveDoctor(doctor).then(res=>console.log(res.data))
    }
  return (
    <>
    {/* <input type="text" placeholder='id' onChange={e=>setId(e.target.value)}/> */}
    <input type="text" placeholder='id' onChange={e=>setDoctor({...doctor, id:e.target.value})}/>
    {/* <input type="text" placeholder='name' onChange={e=>setName(e.target.value)}/> */}
    <input type="text" placeholder='name' onChange={e=>setDoctor({...doctor, name:e.target.value})}/>
    <button onClick={saveRecord}>Submit</button>
    </>
  )
}
