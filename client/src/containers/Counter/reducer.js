import initialState from './initialState'
import * as c from './constants'

function counterContainerReducer(state = initialState, action) {
  switch (action.type) {
    case c.INCREMENT_ACTION:
      return state.set(c.SELECTOR_COUNT_VALUE, state.get(c.SELECTOR_COUNT_VALUE) + 1)
    case c.DECREMENT_ACTION:
      return state.set(c.SELECTOR_COUNT_VALUE, state.get(c.SELECTOR_COUNT_VALUE) - 1)
    case c.INCREMENT_ACTION_ASYNC:
      return state
    default:
      return state
  }
}

export default counterContainerReducer
