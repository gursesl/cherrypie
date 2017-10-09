/* eslint-disable no-unused-vars */
// REFERENCE: CONTAINER TEST
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { fromJS } from 'immutable'
import '../../../setupTests'
import initialState from '../../../initialState'
import CounterContainer from '../index'

const middlewares = []
const mockStore = configureStore(middlewares)
let store = mockStore(fromJS(initialState))

describe('CounterContainer:index', () => {

  let container = mount(<Provider store={store}><CounterContainer /></Provider>)
  let component = container.find('Counter')

  beforeEach(() => {
  })

  it('should be available', () => {
    expect(container.text()).toContain('Counter')
  })

  it('should have a CounterComponent', () => {
    expect(component.length).toEqual(1)
  })

})
