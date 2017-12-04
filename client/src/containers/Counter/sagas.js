import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as c from './constants'

// Increment sagas
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: c.INCREMENT_ACTION })
}

export function* watchIncrementAsync() {
  yield takeEvery(c.INCREMENT_ACTION_ASYNC, incrementAsync)
}
