import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './landingDisplay.css';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 18rem;
  z-index: 1;
  margin-top: auto;
  text-align: center;
  user-select: none !important;
  strong {
    font-size: 1.1em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 35px;
      margin-bottom: 0px !important;
    }
    
  }
`;



const LandingDisplay = () => {
    const [loginB, setloginB] = useState(false);
    const [signupB, setsignupB] = useState(false)

    const loginOnclik = () => {
        setloginB(true);
    }

    const signuponclick = () => {
        setsignupB(true);
    }

    if(loginB){
        return <Redirect to="/login" />;
    }
    if(signupB){
        return <Redirect to="/signup" />;
    }

    return (

        <MyTitleMessage>
            <div className="titleMessage">
                <Row className="heading">
                    <Col lg={12} className="main text-center mb-3">
                        Hi, Welcome To
                    </Col>

                    <Col lg={12} className="name-font">
                      <span>
                          <strong>Expense Tracker</strong>
                      </span>
                    </Col>
                    <Col>
                        <Button className="landingButton" onClick={loginOnclik} variant="success" style={{marginRight: '10px'}}>Login</Button>
                        <Button className="landingButton" onClick={signuponclick} variant="success">Sing UP</Button>
                    </Col>
                </Row>
            </div>
        </MyTitleMessage>
    )
}

export default LandingDisplay;
