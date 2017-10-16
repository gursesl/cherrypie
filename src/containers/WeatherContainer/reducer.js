import { fromJS } from 'immutable'
import initialState from './initialState'
import * as c from './constants'

function weatherContainerReducer(state = initialState, action) {
  switch (action.type) {
    case c.WEATHER_DATA_FETCH_START:
      return state
    case c.WEATHER_DATA_FETCH_SUCCESS:
      return state.set(c.SELECTOR_WEATHER_RESULTS, fromJS(action.payload) || fromJS({}))
    case c.WEATHER_DATA_FETCH_FAILURE:
      return state.set(c.SELECTOR_WEATHER_ERROR, fromJS(action.error) || '')
    default:
      return state
  }
}

export default weatherContainerReducer
