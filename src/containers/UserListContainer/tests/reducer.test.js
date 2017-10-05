import { fromJS } from 'immutable'
import userListReducer from '../reducer'
import * as a from '../actions'

let state
const mockUsers = [
  {
    id: "95617189",
    firstName: "Elfrieda",
    lastName: "Frank",
    email: "Ada20@hotmail.com"
  },
  {
    id: "95617188",
    firstName: "Jim",
    lastName: "Smith",
    email: "jsmith@mail.com"
  },
]
const mockErr = {type: 1, message: "An error occurred."}

describe('userListReducer', () => {

  beforeEach(() => {
    state = fromJS({
      users: [],
      error: null
    })
  })

  it('sould return the initial state', () => {
    expect(userListReducer(undefined, {})).toEqual(state)
  })

  it('should handle usersFetchStart action correctly', () => {
    expect(userListReducer(state, a.usersFetchStart())).toEqual(state)
  })

  it('should handle usersFetchSuccess action correctly', () => {
    const expectedState = fromJS({
      users: mockUsers,
      error: null
    })
    expect(userListReducer(state, a.usersFetchSuccess(mockUsers))).toEqual(expectedState)
  })

  it('should handle usersFetchFailure action correctly', () => {
    const expectedState = fromJS({
      users: [],
      error: mockErr
    })
    expect(userListReducer(state, a.usersFetchFailure(mockErr))).toEqual(expectedState)
  })

})
