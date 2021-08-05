import axios from '../axios-base';
import {setAlert} from './alert';
import {
    FETCH_TRANSACTION_LIST,
    FETCH_TRANSACTION_STATS,
    TRANSACTION_FAIL,
    RESET_PAGE,
    START_OPERATION,
    END_OPERATION
} from './types';

export const fetchTransactionStats = () => async dispatch => {
    try {
        const res = await axios.get('api/transaction/stats');
        dispatch({
            type: FETCH_TRANSACTION_STATS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_FAIL
        })
    }
}

export const fetchTransactionListByPage = (nextPage) => async dispatch => {
    try {
        const res = await axios.get(`api/transaction/page?page=${nextPage}`);
        dispatch({
            type: FETCH_TRANSACTION_LIST,
            payload: res.data
        });
    } catch (err){
        dispatch({
            type: TRANSACTION_FAIL
        })
    }
}

export const resetPageDetails = () => dispatch => {
    dispatch({
        type: RESET_PAGE
    });
}

export const addTransactionData = (type, category, amount, description) => async dispatch => {
    dispatch({
        type: START_OPERATION
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(
        {categoryName: category,
        expenseType: type,
        amount: amount,
        description: description
    });
    try {
        await axios.post("api/transaction", body, config);
        dispatch({
            type: END_OPERATION
        });
        dispatch(fetchTransactionStats());
        dispatch(setAlert("Transaction Added Succesfull", "Success"));
    } catch(err){
        dispatch({
            type: END_OPERATION
        })
        dispatch(setAlert("Add transaction is unsuccessfull", "danger"));
    }
}