import { createSelector } from 'reselect'
import {
  SELECTOR_WEATHER,
  SELECTOR_WEATHER_ZIP,
  SELECTOR_WEATHER_CITY,
  SELECTOR_WEATHER_RESULTS,
  SELECTOR_WEATHER_ERROR,
} from './constants'

// Direct selector to Weather domain
const selectWeather = state => state.get(SELECTOR_WEATHER)

const makeSelectZip = () => createSelector(
  selectWeather,
  state => state.get(SELECTOR_WEATHER_ZIP)
)

const makeSelectCity = () => createSelector(
  selectWeather,
  state => state.get(SELECTOR_WEATHER_CITY)
)

const makeSelectResults = () => createSelector(
  selectWeather,
  state => state.get(SELECTOR_WEATHER_RESULTS)
)

const makeSelectError = () => createSelector(
  selectWeather,
  state => state.get(SELECTOR_WEATHER_ERROR)
)

export {
  selectWeather,
  makeSelectZip,
  makeSelectCity,
  makeSelectResults,
  makeSelectError,
}
