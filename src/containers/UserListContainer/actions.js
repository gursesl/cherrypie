import * as c from './constants'

export function usersFetchStart() {
  return { type: c.USERS_FETCH_START }
}

export function usersFetchSuccess(users) {
  return {
    type: c.USERS_FETCH_SUCCESS,
    payload: users,
  }
}

export function usersFetchFailure(err) {
  return {
    type: c.USERS_FETCH_FAILURE,
    error: err,
  }
}
