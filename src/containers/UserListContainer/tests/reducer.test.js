// REFERENCE: REDUCER TEST
import Immutable from 'immutable'
import initialState from '../../../initialState'
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
const mockError = {type: 1, message: "An error occurred."}

describe('UserListContainer:reducer', () => {

  beforeEach(() => {
    state = Immutable.fromJS(initialState)
  })

  it('sould return the initial state', () => {
    expect(userListReducer(undefined, {})).toEqual(state)
  })

  it('should handle usersFetchStart action correctly', () => {
    expect(userListReducer(state, a.usersFetchStart())).toEqual(state)
  })

  it('should handle usersFetchSuccess action correctly', () => {
    const newstate = state.set('users', mockUsers)
    const expectedState = Immutable.fromJS(newstate)
    expect(userListReducer(state, a.usersFetchSuccess(mockUsers)).toJS().users).toEqual(expectedState.toJS().users)
  })

  it('should handle usersFetchFailure action correctly', () => {
    const newstate = state.set('error', mockError)
    const expectedState = Immutable.fromJS(newstate)
    expect(userListReducer(state, a.usersFetchFailure(mockError)).toJS().error).toEqual(expectedState.toJS().error)
  })

})
