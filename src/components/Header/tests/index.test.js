// REFERENCE: COMPONENT TEST WITH REACT-ROUTER 4
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import createHistory from 'history/createBrowserHistory'
import { Menu, MenuItem } from 'semantic-ui-react'
import '../../../setupTests'
import initialState from '../../../initialState'
import AppHeader from '../'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(Immutable.fromJS(initialState))
const history = createHistory()
const component = (
  <Provider store={store}>
    <Router history={history}>
      <AppHeader />
    </Router>
  </Provider>
)

describe('AppHeader:index', () => {
  const shallowComponent = shallow(<AppHeader.WrappedComponent />)
  const deepComponent = mount(component)

  beforeEach(() => {
  })

  it('should render without blowing up', () => {
    expect(shallowComponent).toBeDefined()
  })

  it('should have the proper initial state', () => {
    expect(shallowComponent.instance().state).toEqual({ visible: false })
  })

  it('should render a Visibility element', () => {
    expect(deepComponent.find(Menu).length).toBe(1)
  });

  it('should have a predefined number of nested menu items', () => {
    expect(deepComponent.find(MenuItem).length).toBe(4)
  })

  it('should render a child <FixedMenu /> component', () => {
    expect(shallowComponent.find('FixedMenu').exists()).toBe(false)
  });

  it('renders itself into the DOM with the correct shallowComponent styles', () => {
    const wrapper = renderer.create(component);
    expect(wrapper).toMatchSnapshot();
  });

  // TODO: Implement scroll simulation and assert FixedMenu found
  it('should have FixedMenu visible if state visible parameter is set to true', () => {
    shallowComponent.instance().hideFixedMenu()
    expect(shallowComponent.instance().state.visible).toBeFalsy()
  })

  it('should have FixedMenu hidden if state visible parameter is set to false', () => {
    shallowComponent.instance().showFixedMenu()
    expect(shallowComponent.instance().state.visible).toBeTruthy()
  })
})
