import React from 'react'
import { useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useEffect } from 'react';
import CityService from '../services/CityService';

export default function City() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
         let cityService = new CityService();
         cityService.getCities().then(result => setCities(result.data.data))
    })


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şehir Adı</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cities.map(City => (
                            <Table.Row key={City.id}>
                                <Table.Cell>{City.cityName}</Table.Cell>
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
