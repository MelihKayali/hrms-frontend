import React from 'react'
import { useState } from 'react'
import { Icon,Menu, Table } from 'semantic-ui-react'
import { useEffect } from 'react';
import TechnologieService from '../services/TechnologieService';

export default function Technologies() {
    const [technologies, setTechnologies] =  useState([])
 
    useEffect(()=>{
     let technologieService = new TechnologieService()
     technologieService.getTechnologies().then(result=>setTechnologies(result.data.data))
    })

   
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Teknoloji adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        technologies.map(Technologies => (
                            <Table.Row key={Technologies.id}>
                                <Table.Cell>{Technologies.id}</Table.Cell>
                                <Table.Cell>{Technologies.technologyName}</Table.Cell>
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
