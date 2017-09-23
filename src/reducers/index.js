import { combineReducers } from 'redux';
// import * as users from './users';
import users from './users';

const allReducers = combineReducers({
    users: users
});

export default allReducers;