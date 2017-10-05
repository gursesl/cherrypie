import { fromJS, Map, List } from 'immutable'
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
    state = Map(initialState)
  })

  it('sould return the initial state', () => {
    expect(userListReducer(undefined, {})).toEqual(state)
  })

  it('should handle usersFetchStart action correctly', () => {
    expect(userListReducer(state, a.usersFetchStart())).toEqual(state)
  })

  it('should handle usersFetchSuccess action correctly', () => {
    const expectedState = Map({...state, users: mockUsers})
    expect(userListReducer(state, a.usersFetchSuccess(mockUsers)).get('users')).toEqual(List(expectedState.get('users')))
  })

  it('should handle usersFetchFailure action correctly', () => {
    const expectedState = Map({...state, error: mockError})
    expect(userListReducer(state, a.usersFetchFailure(mockError)).get('error')).toEqual(expectedState.get('error'))
  })

})
