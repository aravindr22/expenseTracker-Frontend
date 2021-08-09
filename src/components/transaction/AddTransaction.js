import React, {useState} from 'react';
import {Container, Row, Col, ListGroup, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {addTransactionData} from '../../action/transaction';
import Spinner from '../dashboard/Spinner';
import './addtransaction.css';

const AddTransaction = ({auth: {isAuthenticated, loading, user}, addTransactionData}) => {
    const [goToDashboard, setGoToDashboard] = useState(false);
    const [type, setType] = useState("");
    const [type2, settype2] = useState("")
    const [categroyAvailabe, setcategroyAvailabe] = useState(true)
    const [categoryOptions, setcategoryOptions] = useState([]);
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);
    const [description, setdescription] = useState("");

    if(!categroyAvailabe){
        if(type === "income"){
            setType("")
            setcategoryOptions(user.incomeCategory);
        } else if (type === "expense"){
            setType("")
            setcategoryOptions(user.expenseCategory);
        }
    }
    
    const submitDetails = () => {
        if(type2.trim().length !== "" && category.trim().length !== "" && amount > 0){
            addTransactionData(type2, category, amount, description);
        }
    }

    if(!isAuthenticated){
        return <Redirect to="/" />;
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
            <Container className="addtransactioncontainer">
                <Row>
                    <Col style={{alignItems: "center"}}>
                        <h4 className="addtransactionContainerHeading">Add Transaction</h4>
                    </Col>                    
                </Row>
                <form>
                <Row>
                    <Col>
                        <select 
                            className="common-design selectoption1"
                            onChange={(e) => {
                                setType(e.target.value);
                                setcategroyAvailabe(false);
                                settype2(e.target.value)
                                }}>
                            <option>Select an Option</option>
                            <option name="income" value="income">Income</option>
                            <option name="expense" value="expense">Expense</option>
                        </select>                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {categroyAvailabe ?
                            <select disabled className="common-design selectoption2">
                                <option>Select a Category</option>
                            </select>
                            :
                            <select className="common-design selectoption2" disabled={categroyAvailabe} onChange={(e) => setCategory(e.target.value)} >
                            <option>Select an Option</option>
                            {categoryOptions.map(item => {
                                return <option
                                    name={item.name}
                                    key={item.id}
                                    value={item.name}
                                >{item.name}</option>
                            } )}
                        </select>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input 
                            className="common-design amountOption" 
                            type="number" 
                            placeholder="Amount" 
                            name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input
                        className="common-design descriptionOption"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                        ></input>
                    </Col>
                </Row>
                <Button className="buttonOption" onClick={submitDetails}>Submit</Button>
                </form>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {addTransactionData})(AddTransaction);
