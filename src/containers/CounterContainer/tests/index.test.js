/* eslint-disable no-unused-vars */
// REFERENCE: CONTAINER TEST
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import '../../../setupTests'
import CounterContainer from '../index'
import Counter from '../../../components/Counter'

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
    expect(container.text()).toContain('Counter')
  })

  it('should have a CounterComponent', () => {
    expect(component.length).toEqual(1)
  })

})
