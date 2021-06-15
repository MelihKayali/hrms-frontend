import React from 'react'
import { useState } from 'react'
import { Icon,Menu, Table } from 'semantic-ui-react'
import { useEffect } from 'react';
import CandidateUserService from '../services/CandidateUserService';

export default function CandidateUserList() {
    const [candidateUsers, setCandidateUsers] = useState([]);

    useEffect(()=>{
        let candidateUserService = new CandidateUserService()
        candidateUserService.getCandidateUsers().then(result=>setCandidateUsers(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>TC Kimlik No</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidateUsers.map(CandidateUser => (
                            <Table.Row key={CandidateUser.id}>
                                <Table.Cell>{CandidateUser.firstName}</Table.Cell>
                                <Table.Cell>{CandidateUser.lastName}</Table.Cell>
                                <Table.Cell>{CandidateUser.identityNumber}</Table.Cell>
                                <Table.Cell>{CandidateUser.dateOfBirth}</Table.Cell>
                            </Table.Row>
                        ))
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