import { combineReducers } from 'redux-immutable'
import userListContainerReducer from './containers/UserListContainer/reducer'
import counterContainerReducer from './containers/CounterContainer/reducer'
import weatherContainerReducer from './containers/WeatherContainer/reducer'
import { SELECTOR_COUNT } from './containers/CounterContainer/constants'
import { SELECTOR_USERS } from './containers/UserListContainer/constants'
import { SELECTOR_WEATHER } from './containers/WeatherContainer/constants'

export const reducers = {
  [SELECTOR_USERS]: userListContainerReducer,
  [SELECTOR_COUNT]: counterContainerReducer,
  [SELECTOR_WEATHER]: weatherContainerReducer,
}

export default combineReducers(reducers)
