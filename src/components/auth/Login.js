import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {login} from '../../action/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './login.css';

const Login = ({login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to='/dashboard' />;
    }

    return (
        <Container className="loginform">
            <Form className="formI">
                <h1 className="formName">Log In</h1>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email" 
                        value={email}
                        onChange={e => onChange(e)}
                        required
                        />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                        />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
                <p className="my-3" >
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
                </Form>
        </Container>
    );
}

Login.propTypes = {
    
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
//export default Login;
