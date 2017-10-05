import { Map, List } from 'immutable'
import initialState from '../../initialState'
import * as c from './constants'

function counterContainerReducer(state = Map(initialState), action) {
  switch (action.type) {
    case c.INCREMENT_ACTION:
      return state + 1
    case c.DECREMENT_ACTION:
      return state - 1
    case c.INCREMENT_ACTION_ASYNC:
      return state
    default:
      return state
  }
}

export default counterContainerReducer
