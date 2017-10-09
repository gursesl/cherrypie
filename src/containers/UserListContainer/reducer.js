import Immutable from 'immutable'
import initialState from '../../initialState'
import * as c from './constants'

function userListContainerReducer(state = Immutable.fromJS(initialState.users), action) {
  switch (action.type) {
    case c.USERS_FETCH_START:
      return state
    case c.USERS_FETCH_SUCCESS:
      return action.payload
    case c.USERS_FETCH_FAILURE:
      return action.error
    default:
      return state
  }
}

export default userListContainerReducer
