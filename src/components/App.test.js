/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { Router, Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import '../setupTests'
import initialState from '../initialState'
import App, { FixedMenu } from './App'

sinon.spy(App.prototype, 'componentDidMount')

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(Immutable.fromJS(initialState))
const history = createHistory()
const containerDom = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

describe('App:index', () => {
  const container = mount(containerDom)

  beforeEach(() => {
  })

  it('should render without blowing up', () => {
    expect(container).toBeDefined();
  })


  it('should have the proper initial state', () => {
    const wrapper = shallow(containerDom)
    expect(wrapper.instance().store.getState()).toEqual(initialState)
  })

  it('should render a header', () => {
    const renderedComponent = mount(containerDom)
    expect(renderedComponent.find(Header).length).toBe(11)
  });

  it('should have a predefined number of nested React coponents', () => {
    const wrapper = shallow(React.createElement(App))
    expect(wrapper.children().filterWhere(n => typeof n.type() !== 'string').length).toEqual(8)
  })

  it('should render a child <CherryPieHeader /> component', () => {
    expect(container.find('CherryPieHeader').exists()).toBe(true)
  });

  it('should render a child <CounterContainer /> component', () => {
    expect(container.find('CounterContainer').exists()).toBe(true)
  });

  it('should render a child <UserListContainer /> component', () => {
    expect(container.find('UserListContainer').exists()).toBe(true)
  });

  it('should render a child <FixedMenu /> component', () => {
    expect(container.find('FixedMenu').exists()).toBe(false)
  });

  it('renders itself into the DOM with the correct container styles', () => {
    const wrapper = renderer.create(containerDom);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render routes', () => {
    const wrapper = mount(<Provider store={store}><ConnectedRouter history={history} /></Provider>)
    expect(wrapper.find(Router).length).toBeGreaterThanOrEqual(1)
  });

  // TODO: Implement scroll simulation and assert FixedMenu found
  it('should have FixedMenu visible if state visible parameter is set to true', () => {
    const wrapper = shallow(containerDom)
  })

  it('should have FixedMenu hidden if state visible parameter is set to false', () => {
    const wrapper = shallow(React.createElement(App))
    wrapper.instance().hideFixedMenu()
    expect(wrapper.state().visible).toBe(false)
  })

  it('calls componentDidMount', () => {
    expect(container.text()).toContain('Hello React!')
  })
})
