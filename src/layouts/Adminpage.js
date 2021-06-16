import React from 'react'
import { Grid } from 'semantic-ui-react'
// import ResumeAdd from '../pages/ResumeAdd'
// import JobAdvertList from '../pages/JobAdvertList'
// import EmployeeUserList from '../pages/EmployeeUserList'
// import CityList from '../pages/CityList'
// import LanguageList from '../pages/LanguageList'
// import TechnologiesList from '../pages/TechnologiesList'
import { Container } from 'semantic-ui-react'


export default function Dashboard() {
    return (
        <div>
            <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}> 
                    {/* <JobAdvertList/>
                    <EmployeeUserList/>
                    <LanguageList/>
                    <TechnologiesList/> */}
                    </Grid.Column>
                    <Grid.Column width = {12}>
                        {/* <ResumeAdd/>
                        <CityList/> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </div>
    )
}