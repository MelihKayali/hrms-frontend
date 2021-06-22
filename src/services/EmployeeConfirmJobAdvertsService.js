import axios from "axios";


export default class EmployeeConfirmJobAdvertsService{
    getByWaiting() {
        return axios.get("http://localhost:8080/api/confirmJobAdverts/confirmjobadvert?employeeConfirmJobAdvertId=&employeeUserId=&jobAdvertId=")
    }
}