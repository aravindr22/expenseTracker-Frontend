import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {fetchCategoryWiseStats} from '../../action/transaction';
import Spinner from '../dashboard/Spinner';
import AccountPie from './AccountPie';
import './account.css';

const Account = ({auth: {loading, isAuthenticated}, transaction, fetchCategoryWiseStats}) => {
    const [GoToDashboard, setGoToDashboard] = useState(false)

    useEffect(() => {
        fetchCategoryWiseStats();
    },[fetchCategoryWiseStats]);

    if(!isAuthenticated){
        return <Redirect to="/" />
    }

    if(loading || transaction.loading){
        return <Spinner />
    }

    if(GoToDashboard){
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="accountPage">
            <p onClick={() => setGoToDashboard(true)} className="gotoDashboard">{"<- Go to Dashboard page"}</p>
            <Container className="accountPageContainer">
                <Row>
                    <Col>
                        <h3 style={{marginLeft: "220px"}}>Income Stats</h3>
                        <div className="accountPieChart">
                            <AccountPie  data={transaction.incomeStats}/>
                        </div>
                    </Col>
                    <Col>
                        <h3 style={{marginLeft: "220px"}}>Expense Stats</h3>
                        <div className="accountPieChart">
                            <AccountPie  data={transaction.expenseStats}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>  
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    transaction: state.transaction
})

export default connect(mapStateToProps, {fetchCategoryWiseStats})(Account);
