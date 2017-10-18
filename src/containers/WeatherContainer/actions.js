import * as c from './constants'

export function weatherDataFetchStart(payload) {
  return {
    type: c.WEATHER_DATA_FETCH_START,
    payload,
  }
}

export function weatherDataFetchSuccess(payload) {
  return {
    type: c.WEATHER_DATA_FETCH_SUCCESS,
    payload,
  }
}

export function weatherDataFetchFailure(error) {
  return {
    type: c.WEATHER_DATA_FETCH_FAILURE,
    error,
  }
}
