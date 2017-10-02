/* eslint-disable no-unused-vars */
// REFERENCE: CONTAINER TEST
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import '../../../setupTests'
import CounterContainer from '../index'
import Counter from '../../../components/Counter'
import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  INCREMENT_ACTION_ASYNC
} from '../constants'
import { incrementAction, decrementAction, incrementActionAsync } from '../actions'

const middlewares = []
const mockStore = configureStore(middlewares)

// Initialize mock store with empty state
let initialState = {
  value: 7
}
let store = mockStore(initialState)


describe('<CounterContainer>', () => {

  let container = mount(<Provider store={store}><CounterContainer /></Provider>)
  let component = container.find('Counter')

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should be available', () => {
    expect(container.text()).to.include('Counter')
  })

  it('should have a CounterComponent', () => {
    expect(component.length).to.equal(1)
  })

  it('should dispatch incrementAction', () => {
    // Dispatch incrementAction
    store.dispatch(incrementAction())

    // Test if store dispatched the incrementAction action
    const actions = store.getActions()
    const expectedPayload = { type: INCREMENT_ACTION }
    expect(actions).to.deep.equal([expectedPayload])
  })

  it('should dispatch decrementAction', () => {
    store.dispatch(decrementAction())
    const actions = store.getActions()
    const expectedPayload = { type: DECREMENT_ACTION }
    expect(actions).to.deep.equal([expectedPayload])
  })

  it('should dispatch incrementAsyncAction', () => {
    store.dispatch(incrementActionAsync())
    const actions = store.getActions()
    const expectedPayload = { type: INCREMENT_ACTION_ASYNC }
    expect(actions).to.deep.equal([expectedPayload])
  })

})
