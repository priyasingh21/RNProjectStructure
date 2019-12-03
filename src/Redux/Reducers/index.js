import UserReducer from './UserReducer'
import { combineReducers } from 'redux';

const appReducers = combineReducers({
   user: UserReducer
});

export {appReducers}
