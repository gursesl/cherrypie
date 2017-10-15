/* eslint-disable no-unused-vars */
// REFERENCE: CONTAINER TEST
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
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
const history = createHistory()

const component = (
  <Provider store={store}>
    <Router history={history}>
      <CounterContainer>
        <div>Child elements</div>
      </CounterContainer>
    </Router>
  </Provider>
)


describe('CounterContainer:index', () => {
  const container = mount(component)
  const wrapper = container.find('Counter')

  beforeEach(() => {
  })

  it('should be available', () => {
    expect(container.text()).toContain('Counter')
  })

  it('should have a CounterComponent', () => {
    expect(wrapper.length).toEqual(1)
  })
})
