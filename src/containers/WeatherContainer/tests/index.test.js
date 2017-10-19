import React from 'react'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import '../../../setupTests';
import initialState from '../initialState'
import { SELECTOR_WEATHER } from '../constants'
import WeatherContainer from '../'
import WeatherSearchBox from '../../../components/WeatherSearchBox'

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
  const deepContainer = mount(component)

  it('should not blow up', () => {
    expect(deepContainer).toBeDefined()
  })

  it('should be a connected component i.e. container', () => {
    expect(deepContainer.find(Provider).length).toBe(1)
  })

  it('should render a child <WeatherSearchBox /> component', () => {
    expect(deepContainer.find(WeatherSearchBox).length).toBe(1)
  });

  it('should match the snapshot', () => {
    const tree = deepContainer.render()
    expect(tree).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    const tree = deepContainer.find(WeatherSearchBox).render()
    expect(tree).toMatchSnapshot()
  })
})
