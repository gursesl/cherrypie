import { fromJS } from 'immutable'
import initialState from './initialState'
import * as c from './constants'

function userListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case c.USERS_FETCH_START:
      return state
    case c.USERS_FETCH_SUCCESS:
      return state.set(c.SELECTOR_USERS_USERS, fromJS(action.payload) || fromJS({}))
    case c.USERS_FETCH_FAILURE:
      return state.set(c.SELECTOR_USERS_ERROR, fromJS(action.error) || '')
    default:
      return state
  }
}

export default userListContainerReducer
