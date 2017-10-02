/* eslint-disable no-unused-vars */
// REFERENCE: COMPONENT TEST
import React from 'react'
import { Provider } from 'react-redux';
import { mount, unmount, shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import '../../../setupTests'
import CounterComponent from '../'
import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  INCREMENT_ACTION_ASYNC
} from '../../../containers/CounterContainer/constants'
import { incrementAction, decrementAction, incrementActionAsync } from '../../../containers/CounterContainer/actions'

const middlewares = []
const mockStore = configureStore(middlewares)

// Initialize mock store with empty state
let initialState = {}
let store = mockStore(initialState)

const onIncrementSpy = sinon.spy();
const onDecrementSpy = sinon.spy();
const onIncrementAsyncSpy = sinon.spy();

const props = {
  value: 71,
  onIncrement: onIncrementSpy,
  onDecrement: onDecrementSpy,
  onIncrementAsync: onIncrementAsyncSpy
}

let component = mount(<Provider store={store}><CounterComponent {...props} /></Provider>)


describe('<CounterComponent>', () => {


  beforeEach(() => {
    store = mockStore(initialState)
  });

  afterEach(() => {
  });

  it('should be available', () => {
    expect(component.find('button').at(1).text()).to.equal('Increment')
  })

  it('should display the correct clicks', () => {
    expect(component.text()).to.contain('Clicked: 71 times')
  })

  it('should find Increment Async button and simulate a click', () => {
    component.find('button').at(0).simulate('click')
    expect(onIncrementAsyncSpy.calledOnce).to.equal(true)
  })

  it('should find Increment button and simulate a click', () => {
    component.find('button').at(1).simulate('click')
    expect(onIncrementSpy.calledOnce).to.equal(true)
  })

  it('should find Decrement button and simulate a click', () => {
    component.find('button').at(2).simulate('click')
    expect(onDecrementSpy.calledOnce).to.equal(true);

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
