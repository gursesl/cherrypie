import { delay } from 'redux-saga'
import { put, all, call } from 'redux-saga/effects'
import { watchIncrementAsync } from './containers/Counter/sagas'
import { watchUsersFetchSaga } from './containers/UserList/sagas'
import { watchWeatherFetchSaga } from './containers/Weather/sagas'

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
