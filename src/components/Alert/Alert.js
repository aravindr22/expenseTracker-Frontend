import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';

import './alert.css';

const Alert = ({ alerts }) => 
        alerts !== null && 
        alerts.length > 0 &&
        alerts.map(alert => (
        <Container>
            <Row>
                <Col key={alert.id} className={`alert alert-${alert.alertType}`}>
                    {alert.msg}
                </Col>
            </Row>
        </Container>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);