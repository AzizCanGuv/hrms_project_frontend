import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, DropdownItem, Image, Menu } from 'semantic-ui-react'
import Dashboard from './Dashboard'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item style={{marginTop:"0.25"}}>
                <Image  avatar spaced="right" src="https://res.cloudinary.com/dysvnd3gl/image/upload/v1631615115/wsbavayknwx0srycxkty.jpg"></Image>

                <Dropdown pointing="top right" text="Ahmet">
                    <Dropdown.Menu>
                        <DropdownItem text="Information" icon="info"/>
                        <DropdownItem text="Settings" icon="setting"/>
                        <DropdownItem onClick={signOut} text="Log Out" icon="sign-out"/>
                        
                    </Dropdown.Menu>
                </Dropdown>
                
            </Menu.Item>
        </div>
    )
}
