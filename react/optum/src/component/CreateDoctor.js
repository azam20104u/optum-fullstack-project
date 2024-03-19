import React, { useEffect, useState } from "react";
import { saveDoctor } from "./DoctorService";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctorById } from "./DoctorService";

export default function CreateDoctor() {
  const history = useNavigate();
  const { id } = useParams();
  // const [id,setId]=useState(0)
  // const [name,setName]=useState('')
  const [doctor, setDoctor] = useState({ id: 0, name: '' })
  const [errors, setErrors] = useState({id: '', name:''})
  const saveRecord = (e) => {
    e.preventDefault();
    //    const doctor = {id,name}
    if (validateForm()) {
      saveDoctor(doctor).then((res) => {
        console.log(res.data);
        history("/");
      })
    }
  }

  useEffect(() => {
    getDoctorById(id).then((res) => {
      setDoctor(res.data);
    }).catch(err=>console.log(err.data));
  }, [])
  const title=()=>{
    if (id) {
      return <h2 className="text-center">Update Doctor</h2>
    }else{
      return <h2 className="text-center">Add Doctor</h2>
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = {...errors}
    if (doctor.id>0) {
      errorsCopy.id='';
    }else{
      errorsCopy.id='Id is invalid'
      valid = false;
    }
    if (doctor.name.trim()) {
      errorsCopy.name=''
    }else{
      errorsCopy.name='Name is required'
      valid = false;
    }
    setErrors(errorsCopy)
    return valid;
  }

  return (
    <div>
      {/* <input type="text" placeholder='id' onChange={e=>setId(e.target.value)}/> */}
      {/* <input type="text" placeholder='name' onChange={e=>setName(e.target.value)}/> */}
      {/* <input type="text" placeholder='id' onChange={e=>setDoctor({...doctor, id:e.target.value})}/>
    <input type="text" placeholder='name' onChange={e=>setDoctor({...doctor, name:e.target.value})}/>
    <button onClick={saveRecord}>Submit</button> */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Id: </label>
                  <input
                    type="text" 
                    value={doctor.id}
                    placeholder="Enter your Id"
                    className={`form-control ${errors.id? 'is-invalid':''}`}
                    onChange={(e) =>
                      setDoctor({ ...doctor, id: e.target.value })
                    }
                  />
                  {errors.id && <div className='invalid-feedback'>{errors.id}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Name: </label>
                  <input
                    type="text" 
                    value={doctor.name}
                    placeholder="Enter your name"
                    className={`form-control ${errors.name? 'is-invalid':''}`}
                    onChange={(e) =>
                      setDoctor({ ...doctor, name: e.target.value })
                    }
                  />
                   {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveRecord(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
