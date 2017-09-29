/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './userContainer';

configure({ adapter: new Adapter() });

const store = {
  getState: () => {
    return {users: [
      { id: 1, username: "user1" },
      { id: 2, username: "user2" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
    ]};
  },
  subscribe: () => {},
  dispatch: () => {}
};

describe('UserList Container', () => {
  it('should render a list of users', () => {
    let wrapper = mount(<Provider store={store}><UserList /></Provider>);
    expect(wrapper.find('li').length).toEqual(5);
    expect(wrapper.find('li').at(0).text()).toEqual('user1');
  });
});
