import React from 'react'
import * as Yup from "yup"
import { Formik, Form } from 'formik'
import HRMSTextInput from '../utilities/customFormControls/HRMSTextInput'
import { Button, Grid, GridColumn, Container, Segment , Header } from 'semantic-ui-react'
import { useState , useEffect } from 'react'
import CityService from '../services/CityService'
import JobPositionService from '../services/JobPositionsService'
import WorkingPlaceService from '../services/WorkingPlaceService'
import WorkingTimeService from '../services/WorkingTimeService'
import EmployeeConfirmJobAdvertsService from '../services/EmployeeConfirmJobAdvertsService'
import JobAdvertService from '../services/JobAdvertService'


export default function JobAdvertAdd() {
    const[cities,setCities] = useState([])
    const[jobpositions,setJobPositions] = useState([])
    const[workingplaces,setWorkingPlaces] = useState([])
    const[workingTimes,setWorkingTimes] = useState([])


    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))

        let workingPlaceService = new WorkingPlaceService()
        workingPlaceService.getWorkingPlaces().then(result => setWorkingPlaces(result.data.data))

        let workingTimeService = new WorkingTimeService()
        workingTimeService.getWorkingTimes().then(result => setWorkingTimes(result.data.data))
    }, [])

    const initialValues = {
        jobDescription: '',
        cityId: '',
        createdDate: new Date(),
        applicationDeadline: null,
        employerUserId: '',
        jobPositionId: '',
        maxSalary: null,
        minSalary: null,
        openPosition: '',
        workingPlaceId: '',
        workingTimeId: '',
    }

    const submitForm = (values) => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.addJobAdvert(values).then(result => addConfirmJobAdverts(result.data.data.id))
    }

    const addConfirmJobAdverts = (jobAdvertId) => {
        let employeeConfirmJobAdvertsService = new EmployeeConfirmJobAdvertsService()
        employeeConfirmJobAdvertsService.addConfirmJobAdverts(jobAdvertId)
    }

    const schema = Yup.object({
        jobDescription: Yup.string().min(2, "İş açıklaması çok kısa").required("İş açıklaması eklemek zorunludur"),
        openPosition: Yup.number().required("Açık pozisyon eklemek zorunludur."),
        cityId: Yup.string().min(1).max(81).required("Şehir ismi eklemek zorunludur."),
        jobPositionId: Yup.string().min(1).required("İş pozisyonu eklemek zorunludur."),
        workingPlaceId: Yup.string().min(1).required("İş yeri eklemek zorunludur"),
        workingTimeId: Yup.string().min(1).required("İş zamanı eklemek zorunludur")
    })

    return (
        <Container>
            <Grid>
                <GridColumn width={6}>
                    <img style={{ marginLeft: '0em', marginTop: '0em', marginLeft: '-5em' }} src={process.env.PUBLIC_URL + '/image/01.-Advertising.svg'} alt="Photo" width="600" height="600"></img>
                </GridColumn>
                <GridColumn style={{ marginLeft: 'auto', marginRight: "0", marginTop: '2em', display: "flex", justifyContent: "space-around" }} width={10}>
                    <Segment  style={{ width: "75%" }}>
                    <Segment inverted color="teal"><Header inverted content="İş İlanı Ekleme" centered /></Segment>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            <Form className="ui form">
                                <HRMSTextInput name="jobDescription" placeholder="İş açıklaması" />
                                <HRMSTextInput name="openPosition" placeholder="Açık Pozisyon" />
                                <HRMSTextInput name="cityId" placeholder="Şehir" />
                                <HRMSTextInput name="jobPositionId" placeholder="İş pozisyonu" />
                                <HRMSTextInput name="workingPlaceId" placeholder="Çalışma Yeri" />
                                <HRMSTextInput name="workingTimeId" placeholder="Çalıma Zamanı" />
                                <Button color="green" type="submit">Ekle</Button>
                            </Form>
                        </Formik>
                    </Segment>
                </GridColumn>
            </Grid>
        </Container>
    )
}



