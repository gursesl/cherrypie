import { takeEvery, call, put } from 'redux-saga/effects'
import { getUsers } from '../../api/userApi'
import * as c from './constants'

export function* usersFetchSaga() {
  try {
    const users = yield call(getUsers)
    yield put({ type: c.USERS_FETCH_SUCCESS, payload: users })
  } catch (error) {
    yield put({ type: c.USERS_FETCH_FAILURE, error: error })
  }
}

export function* watchUsersFetchSaga() {
  yield takeEvery(c.USERS_FETCH_START, usersFetchSaga)
}
