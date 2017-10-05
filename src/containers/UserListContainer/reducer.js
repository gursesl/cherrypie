import { fromJS } from 'immutable'
import * as c from './constants'

const initialState = fromJS({
  users: [],
  error: null
})

function userListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case c.USERS_FETCH_START:
      return state
    case c.USERS_FETCH_SUCCESS:
      return state.setIn(['users'], fromJS(action.payload))
    case c.USERS_FETCH_FAILURE:
      return state.setIn(['error'], fromJS(action.error))
    default:
      return state
  }
}

export default userListContainerReducer
