// REFERENCE: REDUCER TEST
import { fromJS } from 'immutable'
import counterContainerReducer from '../reducer'
import { incrementAction, decrementAction, incrementActionAsync } from '../actions'

describe('counterContainerReducer', () => {
  let state

  beforeEach(() => {
    state = fromJS(0)
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(counterContainerReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle incrementAction action correctly', () => {
    const expectedResult = state + 1
    expect(counterContainerReducer(state, incrementAction())).toEqual(expectedResult)
  })

  it('should handle decrementAction action correctly', () => {
    const expectedResult = state - 1
    expect(counterContainerReducer(state, decrementAction())).toEqual(expectedResult)
  })

  it('should handle incrementAsyncAction action correctly', () => {
    const expectedResult = state
    expect(counterContainerReducer(state, incrementActionAsync())).toEqual(expectedResult)
  })

  it('returns the initial state snapshot', () => {
    expect(counterContainerReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the incrementAction action snapshot', () => {
    expect(counterContainerReducer({}, incrementAction())).toMatchSnapshot();
  });

  it('handles the toggleNav action snapshot', () => {
    expect(counterContainerReducer({}, decrementAction())).toMatchSnapshot();
  });

  it('handles the toggleNav action snapshot', () => {
    expect(counterContainerReducer({}, incrementActionAsync())).toMatchSnapshot();
  });

})
