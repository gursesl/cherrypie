import { delay } from 'redux-saga'
import { put, all, call } from 'redux-saga/effects'
import { watchIncrementAsync } from './containers/CounterContainer/sagas'
import { watchUsersFetchSaga } from './containers/UserListContainer/sagas'
import { watchWeatherFetchSaga } from './containers/WeatherContainer/sagas'

// Hello saga
export function* helloSaga() {
  yield call(delay, 1000)
  yield put({ type: 'IMAGINARY_HELLO_ACTION' })
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchUsersFetchSaga(),
    watchWeatherFetchSaga(),
  ])
}
