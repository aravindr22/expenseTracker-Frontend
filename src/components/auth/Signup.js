import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

import {register} from '../../action/auth';
import './signup.css';

const Signup = ({register}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        dob: ''
    });

    const { email, password, name, dob } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        register(name, email, password, dob)
        console.log(formData)
    };

    return (
        <Container className="loginformS">
            <Form className="formI" onSubmit={onSubmit}>
                <h1 className="formName">Sign Up</h1>
                <Form.Group className="mb-1" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            name="name" 
                            value={name}
                            onChange={e => onChange(e)}
                            required
                            />
                    </InputGroup>
                </Form.Group>
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
                <Form.Group className="mb-1" controlId="formBasicDOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control 
                        type="date" 
                        name="dob" 
                        value={dob}
                        onChange={e => onChange(e)}
                        required
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="my-3" >
                    Already Have an Account? <Link to="/login">Log In</Link>
                </p>
            </Form>
        </Container>
    )
}

export default connect(null, {register})(Signup);
