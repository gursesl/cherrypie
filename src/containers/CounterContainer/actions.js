import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  INCREMENT_ACTION_ASYNC
} from './constants'

export function incrementAction() {
  return {
    type: INCREMENT_ACTION
  }
}

export function decrementAction() {
  return {
    type: DECREMENT_ACTION
  }
}

export function incrementActionAsync() {
  return {
    type: INCREMENT_ACTION_ASYNC
  }
}
