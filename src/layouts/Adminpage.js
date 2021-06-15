import React from 'react'
import { Grid } from 'semantic-ui-react'
import EmployerUserList from '../pages/EmployerUserList'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}> 
                    <EmployerUserList/>
                    </Grid.Column>
                    <Grid.Column width = {12}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}