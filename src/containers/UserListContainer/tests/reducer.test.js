// REFERENCE: REDUCER TEST
import { fromJS } from 'immutable'
import initialState from '../initialState'
import userListReducer from '../reducer'
import * as a from '../actions'
import * as c from '../constants'

const state = initialState
const mockUsers = fromJS([
  {
    id: "95617189",
    firstName: "Elfrieda",
    lastName: "Frank",
    email: "Ada20@hotmail.com",
  },
  {
    id: "95617188",
    firstName: "Jim",
    lastName: "Smith",
    email: "jsmith@mail.com",
  },
])

const mockError = fromJS({type: 1, message: "An error occurred."})

describe('UserListContainer:reducer', () => {

  beforeEach(() => {
  })

  it('sould return the initial state', () => {
    expect(userListReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle usersFetchStart action correctly', () => {
    expect(userListReducer(state, a.usersFetchStart())).toEqual(state)
  })

  it('should handle usersFetchSuccess action correctly', () => {
    const expectedState = state.set(c.SELECTOR_USERS_USERS, mockUsers)
    expect(userListReducer(state, a.usersFetchSuccess(mockUsers))).toEqual(expectedState)
  })

  it('should handle usersFetchFailure action correctly', () => {
    const expectedState = state.set(c.SELECTOR_USERS_ERROR, mockError)
    expect(userListReducer(state, a.usersFetchFailure(mockError))).toEqual(expectedState)
  })

  it('handles the usersFetchStart action snapshot', () => {
    expect(userListReducer({}, a.usersFetchStart())).toMatchSnapshot();
  });

  it('handles the usersFetchSuccess action snapshot', () => {
    expect(userListReducer(state, a.usersFetchSuccess(mockUsers))).toMatchSnapshot();
  });

  it('handles the usersFetchFailure action snapshot', () => {
    expect(userListReducer(state, a.usersFetchFailure(mockError))).toMatchSnapshot();
  });

})
