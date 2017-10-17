import { takeEvery, call, put } from 'redux-saga/effects'
import { searchByCityName } from './api'
import * as c from './constants'
import * as a from './actions'

export function* weatherFetchSaga(action) {
  // yield console.log('weatherFetchSaga', action.payload);
  try {
    const results = yield call(searchByCityName, action.payload)
    yield put(a.weatherDataFetchSuccess(results))
  } catch (error) {
    yield put(a.weatherDataFetchFailure(error.message))
  }
}

export function* watchWeatherFetchSaga() {
  yield takeEvery(c.WEATHER_DATA_FETCH_START, weatherFetchSaga)
}
