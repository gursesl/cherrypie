import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import createHistory from 'history/createBrowserHistory'
import '../../../setupTests'
import initialState from '../../../initialState'
import Home from '../'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(Immutable.fromJS(initialState))
const history = createHistory()
const component = (
  <Provider store={store}>
    <Router history={history}>
      <Home>
        <div>Children</div>
      </Home>
    </Router>
  </Provider>
)

describe('Home:index', () => {
  const shallowComponent = shallow(component)

  beforeEach(() => {
  })

  it('should render without blowing up', () => {
    expect(shallowComponent).toBeDefined();
  })

  it('should have the proper initial state', () => {
    expect(shallowComponent.instance().store.getState()).toEqual(initialState)
  })

  it('should render a header', () => {
    const renderedComponent = mount(component)
    expect(renderedComponent.find(Home).length).toBe(1)
  });

  it('should have a predefined number of nested React coponents', () => {
    const wrapper = shallow(React.createElement(Home))
    expect(wrapper.children().filterWhere(n => typeof n.type() !== 'string').length).toEqual(7)
  })

  it('should render a child <FixedMenu /> component', () => {
    expect(shallowComponent.find('Segment').exists()).toBe(false)
  });

  it('renders itself into the DOM with the correct shallowComponent styles', () => {
    const wrapper = renderer.create(component);
    expect(wrapper).toMatchSnapshot();
  });
})
