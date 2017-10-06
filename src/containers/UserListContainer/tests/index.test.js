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

const mockUsers = {
  users: [
    {
      id: "95617189",
      firstName: "Elfrieda",
      lastName: "Frank",
      email: "Ada20@hotmail.com"
    },
    {
      id: "95617188",
      firstName: "Jim",
      lastName: "Smith",
      email: "jsmith@mail.com"
    },
  ]
}

const loadedStore = Immutable.fromJS(initialState).set('users', mockUsers)
const store = mockStore(loadedStore)
// console.log("Test:store.getState().toJS()", store.getState().toJS().users)

let container

describe('UserListContainer:index', () => {
  beforeEach(() => {
    container = mount(<Provider store={store}><UserListContainer /></Provider>)
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
