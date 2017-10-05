import { combineReducers } from 'redux-immutable';
import userListContainerReducer from '../containers/UserListContainer/reducer'
import counterContainerReducer from '../containers/CounterContainer/reducer'

const rootReducer = combineReducers({
  users: userListContainerReducer,
  value: counterContainerReducer
});

export default rootReducer;
