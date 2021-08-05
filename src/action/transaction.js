import axios from '../axios-base';

import {
    FETCH_TRANSACTION_LIST,
    FETCH_TRANSACTION_STATS,
    TRANSACTION_FAIL,
    RESET_PAGE
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