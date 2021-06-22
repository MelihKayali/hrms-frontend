import axios from "axios";

export default class WorkingPlaceService{
    getWorkingPlaces(){
        return axios.get("http://localhost:8080/api/workingplaces/getall")
    }
}

