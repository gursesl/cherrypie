// REFERENCE: REDUCER TEST
import { fromJS } from 'immutable'
import initialState from '../initialState'
import userListContainerReducer from '../reducer'
import * as a from '../actions'
import * as c from '../constants'

const state = initialState
const mockUsers = fromJS([
  {
    id: '95617189',
    firstName: 'Elfrieda',
    lastName: 'Frank',
    email: 'Ada20@hotmail.com',
  },
  {
    id: '95617188',
    firstName: 'Jim',
    lastName: 'Smith',
    email: 'jsmith@mail.com',
  },
])

const mockError = fromJS({ type: 1, message: 'An error occurred.' })

describe('UserListContainer:reducer', () => {
  beforeEach(() => {
  })

  it('sould return the initial state', () => {
    expect(userListContainerReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle usersFetchStart action correctly', () => {
    expect(userListContainerReducer(state, a.usersFetchStart())).toEqual(state)
  })

  it('should handle usersFetchSuccess action correctly with a payload', () => {
    const expectedState = state.set(c.SELECTOR_USERS_USERS, mockUsers)
    expect(userListContainerReducer(state, a.usersFetchSuccess(mockUsers))).toEqual(expectedState)
  })

  it('should handle usersFetchSuccess action correctly w/o a payload', () => {
    const expectedState = state.set(c.SELECTOR_USERS_USERS, fromJS({}))
    expect(userListContainerReducer(state, a.usersFetchSuccess())).toEqual(expectedState)
  })

  it('should handle usersFetchFailure action correctly with a load', () => {
    const expectedState = state.set(c.SELECTOR_USERS_ERROR, mockError)
    expect(userListContainerReducer(state, a.usersFetchFailure(mockError))).toEqual(expectedState)
  })

  it('should handle usersFetchFailure action correctly w/o a load', () => {
    const expectedState = state.set(c.SELECTOR_USERS_ERROR, '')
    expect(userListContainerReducer(state, a.usersFetchFailure(''))).toEqual(expectedState)
  })

  it('handles the usersFetchStart action snapshot', () => {
    expect(userListContainerReducer({}, a.usersFetchStart())).toMatchSnapshot();
  });

  it('handles the usersFetchSuccess action snapshot', () => {
    expect(userListContainerReducer(state, a.usersFetchSuccess(mockUsers))).toMatchSnapshot();
  });

  it('handles the usersFetchFailure action snapshot', () => {
    expect(userListContainerReducer(state, a.usersFetchFailure(mockError))).toMatchSnapshot();
  });
})
