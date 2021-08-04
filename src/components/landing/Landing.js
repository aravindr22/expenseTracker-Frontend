import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LandingDisplay  from './landingDisplay/LandingDisplay';
import './landing.css';

const Landing = ({isAuthenticated}) => {

    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="background">
            <LandingDisplay />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Landing);
