import axios from "axios";
import { toast } from "react-toastify";

export default class employeeConfirmJobAdvertsService{
    addConfirmJobAdverts(jobAdvertId){
        axios.post("http://localhost:8080/api/confirmJobAdverts/add" , {
            jobAdvertId : jobAdvertId
        })
    }


    confirmJobAdverts(employeeConfirmJobAdvertId , employeeUserId  , jobAdvertId){
        setTimeout(()=>{
            axios.put("http://localhost:8080/api/confirmJobAdverts/confirmjobadvert?employeeConfirmJobAdvertId=&employeeUserId=&jobAdvertId=")
            .then(toast.info(`Job advert (Id: ${jobAdvertId}) approved by you (Id : ${employeeUserId})`))  
        });
    }



    refuseJobAdverts(employeeConfirmJobAdvertId , employeeUserId  , jobAdvertId){
        setTimeout(() =>{
            axios.put("http://localhost:8080/api/confirmJobAdverts/refuseJobAdvert?employeeConfirmJobAdvertId=&employeeUserId=")
            .then(toast.info(`Job advert (Id: ${jobAdvertId}) approved by you (Id : ${employeeUserId})`))
        })
    }
}