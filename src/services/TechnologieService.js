import axios from "axios";

export default class TechnologieService{
    getTechnologies(){
        return axios.get("http://localhost:8080/api/technology/getall");
    }
}