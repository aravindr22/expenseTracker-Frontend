import axios from '../axios-base';

import {
    FETCH_TRANSACTION_LIST,
    FETCH_TRANSACTION_STATS,
    TRANSACTION_FAIL
} from './types';

export const fetchTransactionStats = () => async dispatch => {
    try {
        console.log("TRA")
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