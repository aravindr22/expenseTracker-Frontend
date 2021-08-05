import {
    FETCH_TRANSACTION_LIST,
    FETCH_TRANSACTION_STATS,
    TRANSACTION_FAIL,
    RESET_PAGE
} from '../action/types';

const initialState = {
    income: 0,
    expense: 0,
    balance: 0,
    page: 0,
    nextPage: 1,
    transactionCount: 0,
    transactions: [],
    lastPage: false,
    loading: true
}

export default function transaction(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case FETCH_TRANSACTION_STATS:
            return {
                ...state,
                transactionCount: payload.transactionCount,
                income: payload.income,
                expense: payload.expense,
                balance: payload.balance,
                loading: false
            }
        case FETCH_TRANSACTION_LIST:
            let val = false;
            if(payload.transactions.length < 5){
                val = true;
            }
            return {
                ...state,
                lastPage: val,
                page: payload.page,
                nextPage: payload.page+1,
                transactions: payload.transactions,
                loading: false
            }
        case TRANSACTION_FAIL:
            return {
                ...state,
                expense: 0,
                income: 0,
                balance: 0,
                transactions: [],
                page: 0,
                nextPage: 1,
                transactionCount: 0,
                lastPage: false
            }
        case RESET_PAGE:
            return {
                ...state,
                transactions: [],
                page: 0,
                nextPage: 1,
                lastPage: false
            }
        default:
            return state;
    }
}