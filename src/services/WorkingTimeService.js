import axios from "axios";

export default class WorkingTimeService{
    getTimes(){
        return axios.get("http://localhost:8080/api/workingtimes/getall")
    }
}

