import { fromJS } from 'immutable'
import { selectCounter } from '../selectors'
import { SELECTOR_COUNT } from '../constants'

describe('CounterContainer:selectors', () => {
  it('should select the global state', () => {
    const globalState = fromJS({})
    const mockedState = fromJS({
      [SELECTOR_COUNT]: globalState,
    })
    expect(selectCounter(mockedState)).toEqual(globalState)
  })
})
