import React from 'react'
import { Nav, Navbar,NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Test = () => {
    return (
        <div className="Nav">
             <Navbar>
                <Nav>
                <Navbar.Brand href="/Dashboard">
                    <h2>GazeGuard</h2>
                    </Navbar.Brand>
                    <NavDropdown className="Dropdown">
                    <NavDropdown.Item href="Timeline">Timeline</NavDropdown.Item>
                    <NavDropdown.Item href="About">About</NavDropdown.Item>
                    <NavDropdown.Item href="Setting">LogOut</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Test
