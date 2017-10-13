import configureStore from 'redux-mock-store'
import {
  USERS_FETCH_START,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from '../constants'
import {
  usersFetchStart,
  usersFetchSuccess,
  usersFetchFailure } from '../actions'

const mockStore = configureStore()
const mockUsers = [
  {
    id: 95617189,
    firstName: 'Elfrieda',
    lastName: 'Frank',
    email: 'Ada20@hotmail.com',
  },
  {
    id: 95617188,
    firstName: 'Jim',
    lastName: 'Smith',
    email: 'jsmith@mail.com',
  },
]
const mockErr = { type: 1, message: 'An error occurred.' }
let store
let actions

describe('UserListContainer:actions', () => {
  beforeEach(() => {
    store = mockStore({})
  })

  it('should be able to dispatch usersFetchStart action', () => {
    store.dispatch(usersFetchStart())
    actions = store.getActions()
    const expectedPayload = { type: USERS_FETCH_START }
    expect(actions).toEqual([expectedPayload])
  })

  it('should be able to dispatch usersFetchSuccess action', () => {
    store.dispatch(usersFetchSuccess(mockUsers))
    actions = store.getActions()
    const expectedPayload = { type: USERS_FETCH_SUCCESS, payload: mockUsers }
    expect(actions).toEqual([expectedPayload])
  })

  it('should be able to dispatch usersFetchFailure action', () => {
    store.dispatch(usersFetchFailure(mockErr))
    actions = store.getActions()
    const expectedPayload = { type: USERS_FETCH_FAILURE, error: mockErr }
    expect(actions).toEqual([expectedPayload])
  })
})
