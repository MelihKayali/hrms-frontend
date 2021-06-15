import axios from "axios";

export default class EmployeeUserService{
    getEmployeeUser(){
        return axios.get("http://localhost:8080/api/employeeuser/getall");
    }
}