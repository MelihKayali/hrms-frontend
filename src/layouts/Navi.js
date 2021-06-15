import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import Searchbar from './Searchbar'


export default function Navi() {
    return (
        <div>
            <Menu inverted fixed>
                <Container>
                <Searchbar/>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>       
                </Container>
             
            </Menu>
        </div>
    )
}