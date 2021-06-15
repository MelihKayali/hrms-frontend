import React from 'react'
import { useState } from 'react'
import { Icon,Menu, Table } from 'semantic-ui-react'
import { useEffect } from 'react';
import EmployerUserService from '../services/EmployerUserService';

export default function EmployerUserList() {
    const [employerUsers, setEmployerUsers] = useState([]);

    useEffect(()=>{
        let employerUserService = new EmployerUserService()
        employerUserService.getEmployerUsers().then(result=>setEmployerUsers(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employerUsers.map(employerUser=> ((
                            <Table.Row key={employerUser.id}>
                                <Table.Cell>{employerUser.companyName}</Table.Cell>
                                <Table.Cell>{employerUser.webAdress}</Table.Cell>
                                <Table.Cell>{employerUser.telephoneNumber}</Table.Cell>
                            </Table.Row>
                        )))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
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
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}