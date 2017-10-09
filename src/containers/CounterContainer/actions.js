import * as c from './constants'

export function incrementAction() {
  return {
    type: c.INCREMENT_ACTION,
  }
}

export function decrementAction() {
  return {
    type: c.DECREMENT_ACTION,
  }
}

export function incrementActionAsync() {
  return {
    type: c.INCREMENT_ACTION_ASYNC,
  }
}
