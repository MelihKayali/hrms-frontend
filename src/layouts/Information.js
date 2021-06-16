import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { DropdownDivider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Information() {
    return (
        <div>
             <Dropdown item text='Yönlendirme'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Ana Sayfa</Dropdown.Item>
                            <Dropdown.Item as ={NavLink} to ="/resumeAdd/:id">Cv Ekleme</Dropdown.Item>
                            <Dropdown.Item>İlan ekleme</Dropdown.Item>
                             <DropdownDivider/>
                        <Dropdown.Item>Cv'ne git</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
        </div>
    )
}