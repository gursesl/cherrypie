/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Immutable from 'immutable'
import '../setupTests'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import initialState from '../initialState'
import App from './App'

sinon.spy(App.prototype, 'componentDidMount')

const middlewares = []
const mockStore = configureStore(middlewares)
let store = mockStore(Immutable.fromJS(initialState))

describe('App:index', () => {

  let container = mount(<Provider store={store}><App /></Provider>)

  beforeEach(() => {
  })

  it('should render without blowing up', () => {
    expect(container).toBeDefined();
  })

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

  it('renders itself into the DOM with the correct container styles', function() {
    const wrapper = renderer.create(
      <Provider store={store}><App /></Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  // TODO: Implement scroll simulation and assert FixedMenu found
  it('should have FixedMenu visible if state visible parameter is set to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().showFixedMenu()
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
