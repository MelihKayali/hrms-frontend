import axios from "axios";

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobadverts/getById?id=" + id);
    }
    
}