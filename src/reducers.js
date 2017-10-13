import { combineReducers } from 'redux-immutable'
import userListContainerReducer from './containers/UserListContainer/reducer'
import counterContainerReducer from './containers/CounterContainer/reducer'
import { SELECTOR_COUNT } from './containers/CounterContainer/constants'
import { SELECTOR_USERS } from './containers/UserListContainer/constants'

export const reducers = {
  [SELECTOR_USERS]: userListContainerReducer,
  [SELECTOR_COUNT]: counterContainerReducer,
}

export default combineReducers(reducers)
