import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import clientsReducer from './clientsReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  clients: clientsReducer,
});

export default rootReducer;