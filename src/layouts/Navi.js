import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
 import Information from './Information'
import Searchbar from './Searchbar'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSıgnIn(params) {
        setIsAuthenticated(true)
        
    }
    return (
        <div>
            <Menu inverted fixed>
                <Container>
                    
                <Menu.Item as={NavLink} to="Home" name='home'/>
                <Menu.Item name='messages'/>
                 <Searchbar/>
                 
                <Menu.Menu position='right'>
                    <Information/>
                    {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSıgnIn}/>} 
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}