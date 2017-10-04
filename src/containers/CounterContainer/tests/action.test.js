// REFERENCE: ACTIONS TEST
import configureStore from 'redux-mock-store'
import { expect } from 'chai'
import '../../../setupTests'

import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  INCREMENT_ACTION_ASYNC
} from '../constants'
import { incrementAction, decrementAction, incrementActionAsync } from '../actions'

const mockStore = configureStore()
let store
let actions

describe('CounterContainer actions', () => {

  beforeEach(() => {
    store = mockStore({})
  })

  it('should dispatch incrementAction', () => {
    store.dispatch(incrementAction())
    actions = store.getActions()
    const expectedPayload = { type: INCREMENT_ACTION }
    expect(actions).to.deep.equal([expectedPayload])
  })

  it('should dispatch decrementAction', () => {
    store.dispatch(decrementAction())
    actions = store.getActions()
    const expectedPayload = { type: DECREMENT_ACTION }
    expect(actions).to.deep.equal([expectedPayload])
  })

  it('should dispatch incrementAsyncAction', () => {
    store.dispatch(incrementActionAsync())
    actions = store.getActions()
    const expectedPayload = { type: INCREMENT_ACTION_ASYNC }
    expect(actions).to.deep.equal([expectedPayload])
  })
})
