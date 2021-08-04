import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import './navbar.css';

const NavbarC = () => {
    return (
        <Fragment>
            <Container>
                <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="animate-navbar nav-theme justify-content-between">
                    <Navbar.Brand className="name" href="/">Expense Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="nav-link" href="/login" >Login</Nav.Link>
                            <Nav.Link className="nav-link" href="/logout" >Logout</Nav.Link>                    
                            <Nav.Link className="nav-link" href="/signup" >Sign Up</Nav.Link>                    
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Fragment>
    )
}

export default NavbarC;
