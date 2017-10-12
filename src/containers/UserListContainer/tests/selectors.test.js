import { fromJS } from 'immutable'
import { selectUsers } from '../selectors'
import { SELECTOR_USERS } from '../constants'

describe('CounterContainer:selectors', () => {
  it('should select the global state', () => {
    const globalState = fromJS({})
    const mockedState = fromJS({
      [SELECTOR_USERS]: globalState,
    })
    expect(selectUsers(mockedState)).toEqual(globalState)
  })
})
