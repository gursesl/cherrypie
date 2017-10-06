// REFERENCE: REDUCER TEST
import immutable from 'immutable'
import initialState from '../../../initialState'
import counterContainerReducer from '../reducer'
import * as a from '../actions'

let state

describe('counterContainerReducer', () => {

  beforeEach(() => {
    state = immutable.fromJS(initialState)
  })

  it('should return the initial state', () => {
    expect(counterContainerReducer(undefined, {})).toEqual(state)
  })

  it('should handle incrementAction action correctly', () => {
    const expectedResult = state + 1
    expect(counterContainerReducer(state, a.incrementAction())).toEqual(expectedResult)
  })

  it('should handle decrementAction action correctly', () => {
    const expectedResult = state - 1
    expect(counterContainerReducer(state, a.decrementAction())).toEqual(expectedResult)
  })

  it('should handle incrementAsyncAction action correctly', () => {
    const expectedResult = state
    expect(counterContainerReducer(state, a.incrementActionAsync())).toEqual(expectedResult)
  })

  it('returns the initial state snapshot', () => {
    expect(counterContainerReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the incrementAction action snapshot', () => {
    expect(counterContainerReducer({}, a.incrementAction())).toMatchSnapshot();
  });

  it('handles the toggleNav action snapshot', () => {
    expect(counterContainerReducer({}, a.decrementAction())).toMatchSnapshot();
  });

  it('handles the toggleNav action snapshot', () => {
    expect(counterContainerReducer({}, a.incrementActionAsync())).toMatchSnapshot();
  });

})
