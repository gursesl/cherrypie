// REFERENCE: REDUCER TEST
import * as matchers from 'jest-immutable-matchers'
import initialState from '../initialState'
import counterContainerReducer from '../reducer'
import * as a from '../actions'
import { SELECTOR_COUNT_VALUE } from '../constants'

const state = initialState

describe('counterContainerReducer', () => {
  beforeEach(() => {
    jest.addMatchers(matchers)
  })

  it('should have the initial state to be immutable', () => {
    expect(state).toBeImmutable();
  });

  it('should return the initial state', () => {
    expect(counterContainerReducer(undefined, {})).toEqual(state)
  })

  it('should handle incrementAction action correctly', () => {
    const expectedResult = state.set(SELECTOR_COUNT_VALUE, state.get(SELECTOR_COUNT_VALUE) + 1)
    expect(counterContainerReducer(state, a.incrementAction())).toEqual(expectedResult)
  })

  it('should handle decrementAction action correctly', () => {
    const expectedResult = state.set(SELECTOR_COUNT_VALUE, state.get(SELECTOR_COUNT_VALUE) - 1)
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
    expect(counterContainerReducer(state, a.incrementAction())).toMatchSnapshot();
  });

  it('handles the decrementAction action snapshot', () => {
    expect(counterContainerReducer(state, a.decrementAction())).toMatchSnapshot();
  });

  it('handles the incrementActionAsync action snapshot', () => {
    expect(counterContainerReducer(state, a.incrementActionAsync())).toMatchSnapshot();
  });
})
