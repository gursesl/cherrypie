import Immutable from 'immutable'
import initialState from '../../initialState'
import * as c from './constants'

function userListContainerReducer(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case c.USERS_FETCH_START:
      return state
    case c.USERS_FETCH_SUCCESS:
      return state
        .set('users', action.payload)
    case c.USERS_FETCH_FAILURE:
      return state
        .set('error', action.error)
    default:
      return state
  }
}

export default userListContainerReducer
