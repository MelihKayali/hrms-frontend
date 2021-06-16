import React from 'react'
import { useState } from 'react'
import { Icon,Menu, Table } from 'semantic-ui-react'
import { useEffect } from 'react';
import EmployeeUserService from '../services/EmployeeUserService';



export default function EmployeeUser() {
   const [employeeUsers, setEmployeeUsers] =  useState([])

   useEffect(()=>{
       let employeeUserService = new EmployeeUserService()
       employeeUserService.getEmployeeUsers().then(result=>setEmployeeUsers(result.data.data))
   })

   return(
    <div>
    <Table celled>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell> id</Table.HeaderCell>              
                <Table.HeaderCell> Adı</Table.HeaderCell>
                <Table.HeaderCell>Soyadı</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                employeeUsers.map(employeeUsers=> ((
                    <Table.Row key={employeeUsers.id}>
                      <Table.Cell>{employeeUsers.id}</Table.Cell>
                        <Table.Cell>{employeeUsers.firstName}</Table.Cell>
                        <Table.Cell>{employeeUsers.lastName}</Table.Cell>
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