import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    LOGOUT,
    USER_LOADED,
    REGISTR_SUCCESS,
    REGISTR_FAIL,
    START_OPERATION
} from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
};

export default function auth(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case START_OPERATION:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            localStorage.removeItem('token')
            localStorage.setItem('token', payload.authencationCode);
            return {
                ...state,
                token: payload.authencationCode,
                isAuthenticated: true,
            };
        case REGISTR_FAIL:
        case REGISTR_SUCCESS:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        case USER_LOADED:
            return {
                ...state,
                user: payload,
                loading: false
            }
        default:
            return state;
    }
}