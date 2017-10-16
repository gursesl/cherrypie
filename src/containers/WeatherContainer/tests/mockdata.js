import { fromJS } from 'immutable'
import {
  SELECTOR_WEATHER,
  SELECTOR_WEATHER_ZIP,
  SELECTOR_WEATHER_CITY,
  SELECTOR_WEATHER_RESULTS,
  SELECTOR_WEATHER_ERROR,
} from '../constants'

export const subState = fromJS({
  [SELECTOR_WEATHER_ZIP]: '20165',
  [SELECTOR_WEATHER_CITY]: 'Sterling',
  [SELECTOR_WEATHER_RESULTS]: {},
  [SELECTOR_WEATHER_ERROR]: 'Load error',
})

export const mockedState = fromJS({
  [SELECTOR_WEATHER]: subState,
})

export const mockData = fromJS([
  {
    id: 95617189,
    zip: '20165',
    city: 'Sterling',
    results: [],
    error: 'An error occurred.',
  },
  {
    id: 95617188,
    zip: '20165',
    city: 'Sterling',
    results: [],
    error: 'An error occurred.',
  },
])

export const mockError = fromJS({ type: 1, message: 'An error occurred.' })
