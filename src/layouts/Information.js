import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { DropdownDivider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Information() {
    return (
        <div>
             <Dropdown item text='Yönlendirme'>
                        <Dropdown.Menu>
                            <Dropdown.Item as = {NavLink} to ="jobAdvertList">İş İlanları</Dropdown.Item>
                            <Dropdown.Item as ={NavLink} to ="/jobAdvetAdd">İş İlan ekleme</Dropdown.Item>
                            <Dropdown.Item as ={NavLink} to ="resumeAdd">Cv Ekleme</Dropdown.Item>
                             <DropdownDivider/>
                        <Dropdown.Item>Cv'ne git</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
        </div>
    )
}