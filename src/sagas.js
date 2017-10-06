import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as c from './containers/CounterContainer/constants'
import { watchUsersFetchSaga } from './containers/UserListContainer/sagas'

export function* helloSaga() {
  yield console.log('Hello Sagas 1!') //eslint-disable-line
  yield call(delay, 1000)
  yield put({ type: c.INCREMENT_ACTION })
  yield console.log('Hello Sagas 2!') //eslint-disable-line
}

// Increment sagas
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: c.INCREMENT_ACTION })
}

export function* watchIncrementAsync() {
  yield takeEvery(c.INCREMENT_ACTION_ASYNC, incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchUsersFetchSaga()
  ])
}
