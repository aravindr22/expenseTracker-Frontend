import React, {Fragment} from 'react'
import {connect} from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import {logout} from '../../action/auth';
import './navbar.css';

const NavbarC = ({isAuthenticated, token, logout}) => {
    return (
        <Fragment>
            <Container>
                <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="animate-navbar nav-theme justify-content-between">
                    {isAuthenticated?
                        <Navbar.Brand className="name">Expense Tracker</Navbar.Brand>:
                        <Navbar.Brand className="name" href="/">Expense Tracker</Navbar.Brand>
                    }
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {isAuthenticated ? (
                                <div>
                                    {/* <Nav.Link  className="nav-link" href="/logout" >Logout</Nav.Link>                     */}
                                    
                                    <a onClick={logout} href="#!" style={{textDecoration: 'none'}}>
                                        <span className="hide-sm logout">Logout</span> 
                                    </a>
                                    
                                </div>
                            ): (
                                <Fragment>
                                    <Nav.Link className="nav-link" href="/login" >Login</Nav.Link>
                                    <Nav.Link className="nav-link" href="/signup" >Sign Up</Nav.Link>                    
                                </Fragment>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, {logout})(NavbarC);
