import axios from "axios";

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }


    getByPosition(position){
        return axios.get("http://localhost:8080/api/jobpositions/getbyposition?position=" + position)
    }

}