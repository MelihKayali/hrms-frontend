import axios from "axios";

export default class EmployerUserService{
    getEmployerUsers(){
        return axios.get("http://localhost:8080/api/employeruser/getall");
    }
}