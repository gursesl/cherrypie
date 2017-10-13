/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import '../../../setupTests';
import initialState from '../initialState'
import UserListContainer from '..'
import { SELECTOR_USERS } from '../constants'

const middlewares = []
const mockStore = configureStore(middlewares)

// Emulate state from combineReducers
const reducedState = Immutable.fromJS({
  [SELECTOR_USERS]: initialState.toJS(),
})

const store = mockStore(reducedState)

describe('UserListContainer:index', () => {
  const container = mount(<Provider store={store}><UserListContainer /></Provider>)

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
    expect(container.find('li').at(0).text()).toEqual('95617189: Frank, Elfrieda = Ada20@hotmail.com');
  });
});
