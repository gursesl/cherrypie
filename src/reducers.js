import { combineReducers } from 'redux-immutable'
import userListContainerReducer from './containers/UserListContainer/reducer'
import counterContainerReducer from './containers/CounterContainer/reducer'

export const combinedReducer = {
  users: userListContainerReducer,
  value: counterContainerReducer,
}

export default combineReducers(combinedReducer)
