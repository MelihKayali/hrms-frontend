import axios from "axios";

export default class TechnologieService{
    getTechnologie(){
        return axios.get("http://localhost:8080/api/technology/getall");
    }
}