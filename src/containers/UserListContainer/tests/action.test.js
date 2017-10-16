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
import * as m from './mockdata'

const mockStore = configureStore()
let store
let actions

describe('UserListContainer:actions', () => {
  beforeEach(() => {
    store = mockStore({})
  })

  it('should dispatch usersFetchStart action', () => {
    store.dispatch(usersFetchStart())
    actions = store.getActions()
    const expectedPayload = { type: USERS_FETCH_START }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch usersFetchSuccess action', () => {
    store.dispatch(usersFetchSuccess(m.mockUsers))
    actions = store.getActions()
    const expectedPayload = { type: USERS_FETCH_SUCCESS, payload: m.mockUsers }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch usersFetchFailure action', () => {
    store.dispatch(usersFetchFailure(m.mockError))
    actions = store.getActions()
    const expectedPayload = { type: USERS_FETCH_FAILURE, error: m.mockError }
    expect(actions).toEqual([expectedPayload])
  })
})
