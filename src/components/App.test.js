/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount, render } from 'enzyme'
import '../setupTests'
import sinon from 'sinon'
import App from './App'
import CounterContainer from '../containers/CounterContainer'

sinon.spy(App.prototype, 'componentDidMount')

describe('<App />', () => {
  const store = {
    getState: () => {
      return {users: [
        { id: 1, username: "user1" },
        { id: 2, username: "user2" },
        { id: 3, username: "user3" },
        { id: 4, username: "user4" },
        { id: 5, username: "user5" },
      ],
      value:88
      }
    },
    subscribe: () => {},
    dispatch: () => {}
  };

  const container = mount(<Provider store={store}><App /></Provider>)

  it('should have a predefined number of nested React coponents', () => {
    const wrapper = shallow(React.createElement(App));
    expect(wrapper.children().filterWhere(n => typeof n.type() !== 'string').length).toEqual(3);
  })

  it('should render <UserList>', () => {
    expect(container.find('Connect(UserList)').length).toEqual(1)
  })

  it('calls componentDidMount', () => {
    expect(container.text()).toContain('Hello React!')
  })

  it('should have a component called Header', () => {
    expect(container.find('CherryPieHeader').length).toEqual(1)
  })

  it('should have a component called CounterContainer', () => {
    expect(container.find('CounterContainer').length).toEqual(1)
  })

})
