import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import {AlertReducer} from './AlertReducer';
import WorkerReducer from './WorkerReducer';
import {ServiceReducer}  from './ServiceReducer';

const rootReducers = combineReducers({
  login: AuthReducer,
  alert:AlertReducer,
  workerAcc:WorkerReducer,
  service:ServiceReducer
  
});

export default rootReducers;