import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8081/api/doctors/'
class Service{
  getAllDoctors(){
    return axios.get(REST_API_BASE_URL)
  }
}

export default new Service();
