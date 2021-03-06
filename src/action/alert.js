import {
    SET_ALERT,
    REMOVE_ALERT
} from './types';

export const setAlert = (msg, alertType, timeout = 2000) => dispatch => {
    const id = Math.floor(Math.random()*10000000);
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ 
        type: REMOVE_ALERT,
        payload: id
    }), timeout);
}