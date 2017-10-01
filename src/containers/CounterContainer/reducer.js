import { fromJS } from 'immutable'
import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  INCREMENT_ACTION_ASYNC
} from './constants'

const initialState = fromJS(0);

function counterContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ACTION:
      return state + 1
    case DECREMENT_ACTION:
      return state - 1
    case INCREMENT_ACTION_ASYNC:
      console.log('Async action called') //eslint-disable-line
      return state
    default:
      return state
  }
}

export default counterContainerReducer
