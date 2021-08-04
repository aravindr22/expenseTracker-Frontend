import {combineReducers} from 'redux';

import auth from './auth';
import alert from './alert';
import transaction from './transaction';

export default combineReducers({
    auth,
    alert,
    transaction
});