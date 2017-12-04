import { combineReducers } from 'redux-immutable'
import counterContainerReducer from './containers/Counter/reducer'
import userListContainerReducer from './containers/UserList/reducer'
import weatherContainerReducer from './containers/Weather/reducer'
import { SELECTOR_COUNT } from './containers/Counter/constants'
import { SELECTOR_USERS } from './containers/UserList/constants'
import { SELECTOR_WEATHER } from './containers/Weather/constants'

export const reducers = {
  [SELECTOR_COUNT]: counterContainerReducer,
  [SELECTOR_USERS]: userListContainerReducer,
  [SELECTOR_WEATHER]: weatherContainerReducer,
}

export default combineReducers(reducers)
