import { takeEvery, call, put } from 'redux-saga/effects'
import { getUsers } from '../../api/userApi'
import * as c from './constants'
import * as a from './actions'

export function* usersFetchSaga() {
  try {
    const users = yield call(getUsers)
    yield put(a.usersFetchSuccess(users))
  } catch (error) {
    yield put(a.usersFetchFailure(error.message))
  }
}

export function* watchUsersFetchSaga() {
  yield takeEvery(c.USERS_FETCH_START, usersFetchSaga)
}
