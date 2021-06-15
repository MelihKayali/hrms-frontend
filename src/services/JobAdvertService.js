import axios from "axios";

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getall");
    }
    postJobAdvert(jobAdvert){
        axios.post("http://localhost:8080/api/jobadverts/getall",{
            employerId: jobAdvert.employerId,
            jobPositionId: jobAdvert.jobPositionId,
            cityId: jobAdvert.cityId,
            workingPlaceId: jobAdvert.workingPlaceId,
            workingTimeId: jobAdvert.workingTimeId,
            advertDescription: jobAdvert.advertDescription,
            minSalary: jobAdvert.minSalary,
            maxSalary: jobAdvert.maxSalary,
            openPosition: jobAdvert.openPosition,
            createdDate: jobAdvert.createdDate,
            deadline: jobAdvert.deadline
        })
        .then(function (response) {
            console.log(response.data.message)
        })
    }
}