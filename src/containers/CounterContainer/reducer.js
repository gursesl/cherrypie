import { fromJS } from 'immutable'
import * as c from './constants'

const initialState = fromJS(0);

function counterContainerReducer(state = initialState, action) {
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
