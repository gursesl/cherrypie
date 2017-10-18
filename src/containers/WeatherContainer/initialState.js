import { fromJS } from 'immutable'
import {
  SELECTOR_WEATHER_ZIP,
  SELECTOR_WEATHER_CITY,
  SELECTOR_WEATHER_RESULTS,
  SELECTOR_WEATHER_ERROR,
} from './constants'

const initialState = fromJS({
  [SELECTOR_WEATHER_ZIP]: '20165',
  [SELECTOR_WEATHER_CITY]: 'Sterling',
  [SELECTOR_WEATHER_RESULTS]: {},
  [SELECTOR_WEATHER_ERROR]: 'Load error',
})

export default initialState
