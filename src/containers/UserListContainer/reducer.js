import { Map, List } from 'immutable'
import initialState from '../../initialState'
import * as c from './constants'

function userListContainerReducer(state = Map(initialState), action) {
  switch (action.type) {
    case c.USERS_FETCH_START:
      return state
    case c.USERS_FETCH_SUCCESS:
      return state.set('users', List(action.payload))
    case c.USERS_FETCH_FAILURE:
      return state.set('error', action.error)
    default:
      return state
  }
}

export default userListContainerReducer
