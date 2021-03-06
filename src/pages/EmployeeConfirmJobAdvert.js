import React from 'react'
import { Container, Table, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import EmployeeConfirmJobAdvertsService from '../services/EmployeeConfirmJobAdvertsService';


export default function EmployeeConfirmJobAdvert() {
    const [employeeConfirmJobAdverts, setEmployeeConfirmJobAdvert] = useState([]);

    // useEffect(() => {
    //     let employeeConfirmJobAdvertsService = new EmployeeConfirmJobAdvertsService()
    //     employeeConfirmJobAdvertsService.addConfirmJobAdverts().then(result => setEmployeeConfirmJobAdvert(result.data.data))
    // }, [])


    const confirmjobadvert = (employeeConfirmJobAdvertId , jobAdvertId) =>{
        let employeeConfirmJobAdvertsService = new EmployeeConfirmJobAdvertsService()
        employeeConfirmJobAdvertsService.confirmJobAdverts(employeeConfirmJobAdvertId , jobAdvertId)
    }



    const refuseJobAdverts = (employeeConfirmJobAdvertId , jobAdvertId) =>{
        let employeeConfirmJobAdvertsService = new EmployeeConfirmJobAdvertsService()
        employeeConfirmJobAdvertsService.refuseJobAdverts(employeeConfirmJobAdvertId , jobAdvertId)
    }

    return (
        <div>
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            {/* <Table.HeaderCell>İş açıklaması</Table.HeaderCell> */}
                            <Table.HeaderCell>En alçak maaş</Table.HeaderCell>
                            <Table.HeaderCell>En yüksek Maaş</Table.HeaderCell>
                            <Table.HeaderCell>Açık Pozisyonu</Table.HeaderCell>
                            {/* <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell> */}
                            <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                            {/* <Table.HeaderCell>Aktif Mi</Table.HeaderCell> */}
                            {/* <Table.HeaderCell>İş veren</Table.HeaderCell> */}
                            <Table.HeaderCell>Meslek Grubu</Table.HeaderCell>
                            <Table.HeaderCell>Şehir</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        {
                            employeeConfirmJobAdverts.map(employeeConfirmJobAdvert => (
                                <Table.Row key={employeeConfirmJobAdvert.id}>
                                    {/* <Table.Cell>{jobAdvert.jobDescrition}</Table.Cell> */}
                                    <Table.Cell>{employeeConfirmJobAdvert.minSalary}</Table.Cell>
                                    <Table.Cell>{employeeConfirmJobAdvert.maxSalary}</Table.Cell>
                                    <Table.Cell>{employeeConfirmJobAdvert.openPosition}</Table.Cell>
                                    {/* <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell> */}
                                    <Table.Cell>{employeeConfirmJobAdvert.createdDate}</Table.Cell>
                                    {/* <Table.Cell>{jobAdvert.isActive}</Table.Cell> */}
                                    {/* <Table.Cell>{jobAdvert.employerUser}</Table.Cell> */}
                                    <Table.Cell>{employeeConfirmJobAdvert.jobPosition.position}</Table.Cell>
                                    <Table.Cell>{employeeConfirmJobAdvert.city.cityName}</Table.Cell>
                                    <Button color = "green">Onayla</Button>
                                     <Button color = "red">Reddet</Button>   
                                    
                                </Table.Row>
                            ))
                        }

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            {/* <Table.HeaderCell>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Footer>
                </Table>

            </Container>
        </div>
    )
}
