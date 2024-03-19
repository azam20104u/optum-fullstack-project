import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8081/api/doctors/'

export const getDoctorById = (id) => axios.get(REST_API_BASE_URL+id)
export const getAllDoctors = () => axios.get(REST_API_BASE_URL)
export const saveDoctor = (doctor) => axios.post(REST_API_BASE_URL,doctor)
export const updateDoctorById = (id,doctor) => axios.put(REST_API_BASE_URL+id,doctor)
export const deleteDoctorById = (id) => axios.delete(REST_API_BASE_URL+id)
