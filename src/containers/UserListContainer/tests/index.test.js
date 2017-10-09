/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import Immutable from 'immutable'
import '../../../setupTests';
import configureStore from 'redux-mock-store'
import initialState from '../../../initialState'
import UserListContainer from '..'

const middlewares = []
const mockStore = configureStore(middlewares)
let store = mockStore(Immutable.fromJS(initialState))

describe('UserListContainer:index', () => {
  let container = mount(<Provider store={store}><UserListContainer /></Provider>)

  beforeEach(() => {
  })

  it('should render without blowing up', () => {
    expect(container).toBeDefined();
  })

  it('should render a child <UserList /> component', () => {
    expect(container.find('UserList').exists()).toBe(true)
  });

  it('should render a list of users', () => {
    expect(container.find('li').length).toEqual(2);
    expect(container.find('li').at(0).text()).toEqual('95617189: Frank, Elfrieda -> Ada20@hotmail.com');
  });

});
