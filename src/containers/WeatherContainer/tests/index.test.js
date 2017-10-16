import React from 'react'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import '../../../setupTests';
import initialState from '../initialState'
import { SELECTOR_WEATHER } from '../constants'
import WeatherContainer from '../'

const middlewares = []
const mockStore = configureStore(middlewares)

// Emulate state from combineReducers
const reducedState = fromJS({
  [SELECTOR_WEATHER]: initialState.toJS(),
})

const store = mockStore(reducedState)

const component = (
  <Provider store={store}>
    <WeatherContainer hi={34} />
  </Provider>
)

describe('WeatherContainer:index', () => {
  // const shallowContainer = shallow(component)
  const deepContainer = mount(component)

  it('should not blow up', () => {
    // console.log(shallowContainer.debug())
    expect(deepContainer).toBeDefined()
  })

  it('should be a connected component i.e. container', () => {
    // console.log(deepContainer.find(Provider).debug())
    expect(deepContainer.find(Provider).length).toBe(1)
  })

  it('should match the snapshot', () => {
    expect(deepContainer).toMatchSnapshot()
  })
})
