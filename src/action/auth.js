import axios from '../axios-base';
import {setAlert} from './alert';
import setAuthToken from '../utils/setAuthToken';
import {fetchTransactionStats} from '../action/transaction';

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    REGISTR_SUCCESS,
    REGISTR_FAIL,
    START_OPERATION,
    TRANSACTION_FAIL,
    ADD_INCOME_CATEGORY,
    GET_INCOME_CATEGORY,
    ADD_EXPENSE_CATEGORY,
    GET_EXPENSE_CATEGORY,
    FETCH_ALL_CATEGORY,
    END_OPERATION
} from './types';

//Load User
export const loadUSer = () => async dispatch => {
    dispatch({
        type: START_OPERATION
    });
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/user');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
        dispatch(fetchTransactionStats());
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//Login user
export const login = (email, password) => async dispatch => {
    dispatch({
        type: START_OPERATION
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUSer());
        dispatch(setAlert("Login Success", "success"));
    } catch(err) {
        console.log(err)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
}

//Lgout USer /Clear Profile
export const logout = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth/logout');
        dispatch(setAlert(res.data.message, "success"));
        dispatch({
            type: LOGOUT
        });
        dispatch({
            type: TRANSACTION_FAIL
        });
    } catch (err){
        dispatch({
            type: LOGOUT
        });
        dispatch({
            type: TRANSACTION_FAIL
        });
    }
}

//Register User
export const register = (name, email, password, dob) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password, dob});
    try {
        const res = await axios.post('/api/auth/register', body, config);
        dispatch(setAlert(res.data.message, "success"));
        dispatch({
            type: REGISTR_SUCCESS
        });

    } catch(err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTR_FAIL
        });
    }
}

export const addIncomeCategory = (categoryName) => async dispatch => {
    dispatch({
        type: START_OPERATION
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name: categoryName});
    try{
        await axios.post("/api/user/incomeCategory", body, config);
        dispatch(setAlert("The category is added successfully", "success"));
        dispatch({
            type: END_OPERATION
        })
        dispatch(fetchAllCategory());
    } catch(err){
        dispatch({
            type: END_OPERATION
        })
    }
}

export const addExpenseCategory = (categoryName) => async dispatch => {
    dispatch({
        type: START_OPERATION
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name: categoryName});
    try{
        await axios.post("/api/user/expenseCategory", body, config);
        dispatch(setAlert("The category is added successfully", "success"));
        dispatch({
            type: END_OPERATION
        })
        dispatch(fetchAllCategory());
    } catch(err){
        dispatch({
            type: END_OPERATION
        })
    }
}

export const fetchAllCategory = () => async dispatch => {
    dispatch({
        type: START_OPERATION
    });
    try{
        const res = await axios.get("/api/user/categories");
        dispatch({
            type: FETCH_ALL_CATEGORY,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: END_OPERATION
        })
    }
}