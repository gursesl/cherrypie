import * as c from './constants'

export function weatherDataFetchStart() {
  return { type: c.WEATHER_DATA_FETCH_START }
}

export function weatherDataFetchSuccess(cities) {
  return {
    type: c.WEATHER_DATA_FETCH_SUCCESS,
    payload: cities,
  }
}

export function weatherDataFetchFailure(err) {
  return {
    type: c.WEATHER_DATA_FETCH_FAILURE,
    error: err,
  }
}
