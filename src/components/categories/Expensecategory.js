import React, {useState} from 'react';
import {Container, Row, Col, ListGroup, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {addExpenseCategory} from '../../action/auth';
import Spinner from '../dashboard/Spinner';
import './category.css';

const Expensecategory = ({auth: {loading, isAuthenticated, user}, addExpenseCategory}) => {
    const [goToDashboard, setGoToDashboard] = useState(false);
    const [categoryName, setcategoryName] = useState("");

    const onChangeCName = e => setcategoryName(e.target.value);

    const submitCName = () => {
        if(categoryName.trim().length !== 0){
            addExpenseCategory(categoryName.trim());
        }
    }

    if(!isAuthenticated){
        return <Redirect to="/" />
    }

    if(loading){
        return <Spinner />
    }

    if(goToDashboard){
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <p onClick={() => setGoToDashboard(true)} className="gotoDashboard">{"<- Go to Dashboard page"}</p>
            <Container className="expenseCategoryContainer">
                <Row>
                    <Col>
                        <h4 className="expenseCategoryContainerHeading">Expense Category</h4>
                    </Col>                    
                </Row>
                <Row>
                    <Col xs={6}>
                        <ListGroup className="expenseCategoryTable">
                            <ListGroup.Item>
                                <Row className="expenseCategoryTableHeading">
                                    <Col xs={4}>ID</Col>
                                    <Col>Name</Col>
                                </Row>
                            </ListGroup.Item>
                            {user.expenseCategory.map(item => (
                                <ListGroup.Item key={item.id}>
                                    <Row>
                                        <Col xs={4}>{item.id}</Col>
                                        <Col>{item.name}</Col>
                                    </Row>
                                </ListGroup.Item>   
                            ))}
                        </ListGroup>
                    </Col>
                    <Col xs={6}>
                        <Col style={{marginBottom: "20px"}}>
                            <h5>Add Expensecategory</h5>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Control 
                                        style={{width: "75%"}}
                                        type="text" 
                                        placeholder="Enter New Category Name" 
                                        name="categoryName" 
                                        value={categoryName}
                                        onChange={e => onChangeCName(e)}
                                        required
                                        />
                                    <Button style={{margin: "10px 61%"}} onClick={submitCName}>
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {addExpenseCategory})(Expensecategory);
