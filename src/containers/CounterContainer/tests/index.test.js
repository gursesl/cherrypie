/* eslint-disable no-unused-vars */
// REFERENCE: CONTAINER TEST
import React from 'react'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import '../../../setupTests'
import initialState from '../initialState'
import CounterContainer from '../index'
import { SELECTOR_COUNT } from '../constants'

const middlewares = []
const mockStore = configureStore(middlewares)

// Emulate state from combineReducers
const reducedState = Immutable.fromJS({
  [SELECTOR_COUNT]: initialState.toJS(),
})

const store = mockStore(reducedState)

describe('CounterContainer:index', () => {
  const container = mount(<Provider store={store}><CounterContainer /></Provider>)
  const component = container.find('Counter')

  beforeEach(() => {
  })

  it('should be available', () => {
    expect(container.text()).toContain('Counter')
  })

  it('should have a CounterComponent', () => {
    expect(component.length).toEqual(1)
  })
})
