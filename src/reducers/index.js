import { combineReducers } from 'redux';
import UsersReducer from './reducerUsers';
import counterContainerReducer from '../containers/CounterContainer/reducer'

const rootReducer = combineReducers({
  users: UsersReducer,
  value: counterContainerReducer
});

export default rootReducer;
