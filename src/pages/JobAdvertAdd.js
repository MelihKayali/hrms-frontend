import React from 'react'
import { Container, Form, Button, GridColumn } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Segment } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { useState } from 'react'
import { useEffect } from 'react'
import JobAdvertService from '../services/JobAdvertService'

export default function JobAdvertAdd() {

    const formik = useFormik({
        initialValues: {
            jobDescription: '',
            maxSalary: '', // 0, null => NaN
            minSalary: '',
            openPosition: '',
            applicationDeadline: '', // Date
            employerUserId: '',
            jobPositionId: '',
            cityId: ''
        },

        validationSchema: Yup.object({
            jobDescription: Yup.string().required("nice try :)"),
            maxSalary: Yup.string().required("nice try :)"),
            minSalary: Yup.string().required("nice try :)"),
            openPosition: Yup.string().required("nice try :)"),
            applicationDeadline: Yup.string().required("nice try :)"),
            employerUserId: Yup.string().required("nice try :)"),
            jobPositionId: Yup.string().required("nice try :)"),
            cityId: Yup.string().required("nice try :)")
        }),
        onSubmit: (formData) => {
            console.log(formData)
        }
    })

    const typesOfWork = [{ key: "İş Yerinde ", text: "İş Yerinde", value: "İş Yerinde" }, { key: "Uzaktan Çalışma", text: "Uzaktan Çalışma", value: "Uzaktan Çalışma" }];
    const workingTime = [{ key: "Tam Zamanlı", text: "Tam Zamanlı", value: "Tam Zamanlı" }, { key: "Yarı Zamanlı", text: "Yarı Zamanlı", value: "Yarı Zamanlı" }, { key: "Dönemsel Zamanlı", text: "Dönemsel Zamanlı", value: "Dönemsel Zamanlı" }, { key: "Yeni Mezun", text: "Yeni Mezun", value: "Yeni Mezun" }, { key: "Serbest Zamanlı", text: "Serbest Zamanlı", value: "Serbest Zamanlı" }];
    const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
  }, [])

    return (
        <Container
        //style={{
        //textAllign: "center",
        //display: "flex",
        //alignItems: "center",
        //flexDirection: "column",
        //justifyContent: "space-around",
        //height: "100vh"
        //}}
        >
            <Grid>
                <GridColumn width={6}>
                    <img style={{ marginLeft: '0em', marginTop: '0em', marginLeft: '-5em' }} src={process.env.PUBLIC_URL + '/image/01.-Advertising.svg'} alt="Photo" width="600" height="600"></img>
                </GridColumn>
                <GridColumn style={{ marginLeft: 'auto', marginRight: "0", marginTop: '2em', display: "flex", justifyContent: "space-around" }} width={10}>
                    <Segment style={{ width: "75%" }} >
                        <Segment inverted color="teal"><Header inverted content="İş İlanı Ekleme" centered /></Segment>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Input type="text" placeholder="Job Description" name="jobDescription" onChange={formik.handleChange} error={formik.errors.jobDescription && formik.touched.jobDescription} value={formik.values.jobDescription} />
                            <Form.Input type="text" placeholder="maxSalary" name="maxSalary" onChange={formik.handleChange} error={formik.errors.maxSalary && formik.touched.maxSalary} value={formik.values.maxSalary} />
                            <Form.Input type="text" placeholder="minSalary" name="minSalary" onChange={formik.handleChange} error={formik.errors.minSalary && formik.touched.minSalary} value={formik.values.minSalary} />
                            <Form.Input type="text" placeholder="openPosition" name="openPosition" onChange={formik.handleChange} error={formik.errors.openPosition && formik.touched.openPosition} value={formik.values.openPosition} />
                            <Form.Input type="text" placeholder="applicationDeadline" name="applicationDeadline" onChange={formik.handleChange} error={formik.errors.applicationDeadline && formik.touched.applicationDeadline} value={formik.values.applicationDeadline} />
                            <Form.Input type="text" placeholder="employerUser" name="employerUserId" onChange={formik.handleChange} error={formik.errors.employerUserId && formik.touched.employerUserId} value={formik.values.employerUserId} />
                            <Form.Input type="text" placeholder="jobPosition" name="jobPositionId" onChange={formik.handleChange} error={formik.errors.jobPositionId && formik.touched.jobPositionId} value={formik.values.jobPositionId} />
                            <Form.Input type="text" placeholder="city" name="cityId" onChange={formik.handleChange} error={formik.errors.cityId && formik.touched.cityId} value={formik.values.cityId} />
                             <Dropdown
                                placeholder='Çalışma Türünü Seçiniz'
                                fluid
                                selection
                                options={typesOfWork}
                            /><Dropdown
                                placeholder='Çalışma Zamanını Seçiniz'
                                fluid
                                selection
                                options={workingTime}
                            /> 
                            <Button type="submit">Ekle</Button>
                            <Button type="button" onClick={formik.handleReset}>Sıfırla</Button>
                        </Form>
                    </Segment>
                </GridColumn>
            </Grid>
            {/* <h1>İş İlanı Ekleme</h1> */}
        </Container>
    )
}



