import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {Container, Row, Col, ListGroup, ButtonGroup, Button} from 'react-bootstrap';

import Spinner from '../dashboard/Spinner';
import {fetchTransactionListByPage, resetPageDetails} from  '../../action/transaction';
import "./transaction.css";

const Transaction = ({fetchTransactionListByPage, resetPageDetails, transaction}) => {

    const [goToDashboard, setGoToDashboard] = useState(false);

    useEffect(() => {
        if(!transaction.lastPage){
            fetchTransactionListByPage(transaction.nextPage);
        }
    }, [fetchTransactionListByPage]);


    const nextPage = () => {
        if(!transaction.lastPage){
            fetchTransactionListByPage(transaction.nextPage);
        }
    }

    const previousPage = () => {
        if(transaction.page-1 > 0){
            fetchTransactionListByPage(transaction.page - 1);
        }
    }

    if(transaction.loading){
        return <Spinner />
    }

    if(goToDashboard){
        resetPageDetails();
        return <Redirect to="/dashboard" />
    }

    return (
        <div> 
            <p onClick={() => setGoToDashboard(true)} className="gotoDashboard">{"<- Go to Dashboard page"}</p>
            <Container className="transactionContainer">
                <Row>
                    <Col className="transactionHeading" md={{ span: 4, offset: 4 }}>
                        <h4>Transaction Details</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="pageno">page: {transaction.page}</p>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row className="transactionListHeading">
                                    <Col>ID</Col>
                                    <Col>Amount</Col>
                                    <Col>Category</Col>
                                    <Col>Type</Col>
                                    <Col>Date</Col>
                                </Row>
                            </ListGroup.Item>
                            {transaction.transactions.map(item => {
                                return <ListGroup.Item key={item.id}>
                                    <Row className="">
                                        <Col>{item.id}</Col>
                                        <Col>{item.amount}</Col>
                                        <Col>{item.categoryName}</Col>
                                        <Col>{item.expenseType}</Col>
                                        <Col><Moment format="YYYY/MM/DD">{Date(item.timestamp)}</Moment></Col>
                                    </Row>
                                </ListGroup.Item>
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="transactionButtonGroup">
                            <Button onClick={previousPage}>{"< "}Previous</Button> 
                            <Button onClick={nextPage}>Next{" >"}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    transaction: state.transaction
});

export default connect(mapStateToProps, {
    fetchTransactionListByPage,
    resetPageDetails
})(Transaction);
