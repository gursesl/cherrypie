// REFERENCE: ACTIONS TEST
import configureStore from 'redux-mock-store'
import '../../../setupTests'
import * as c from '../constants'
import * as a from '../actions'

const mockStore = configureStore()
let store
let actions

describe('CounterContainer:actions', () => {
  beforeEach(() => {
    store = mockStore({})
  })

  it('should dispatch incrementAction', () => {
    store.dispatch(a.incrementAction())
    actions = store.getActions()
    const expectedPayload = { type: c.INCREMENT_ACTION }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch decrementAction', () => {
    store.dispatch(a.decrementAction())
    actions = store.getActions()
    const expectedPayload = { type: c.DECREMENT_ACTION }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch incrementAsyncAction', () => {
    store.dispatch(a.incrementActionAsync())
    actions = store.getActions()
    const expectedPayload = { type: c.INCREMENT_ACTION_ASYNC }
    expect(actions).toEqual([expectedPayload])
  })
})
