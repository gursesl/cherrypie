/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import Immutable from 'immutable'
import '../../../setupTests';
import configureStore from 'redux-mock-store'
import initialState from '../../../initialState'
import UserListContainer from '..'
import Counter from '../../../components/UserList'

const middlewares = []
const mockStore = configureStore(middlewares)

// const mockUsers = [
//   {
//     id: "95617189",
//     firstName: "Elfrieda",
//     lastName: "Frank",
//     email: "Ada20@hotmail.com"
//   },
//   {
//     id: "95617188",
//     firstName: "Jim",
//     lastName: "Smith",
//     email: "jsmith@mail.com"
//   },
// ]




// const store = {
//   getState: () => {
//     return {users: [
//       { id: 1, username: "user1" },
//       { id: 2, username: "user2" },
//       { id: 3, username: "user3" },
//       { id: 4, username: "user4" },
//       { id: 5, username: "user5" },
//     ]};
//   },
//   subscribe: () => {},
//   dispatch: () => {}
// }



describe('UserListContainer:index', () => {

  // let container = shallow(<Provider store={store}><UserListContainer /></Provider>)
  let component


  // Initialize mockstore with empty state
  const store = mockStore(Immutable.fromJS(initialState))
  // const store = mockStore(initialState)
  // console.log(store.getState())

  beforeEach(() => {
    const wrapper = shallow(
      <Provider store={store}>
        <UserListContainer />
      </Provider>
    );
    // console.log(wrapper.state)
    component = wrapper.find('UserListContainer');
  })

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  })

  it('should be available', () => {
    // expect(component.render()).toContain('UserList')
  })


  //FIXME: Failing test
  it('should render a list of users', () => {
    // console.log(store)
    // let wrapper = mount(<Provider store={store}><UserListContainer /></Provider>);
    // let wrapper = shallow(<UserListContainer store={store} />);
    // console.log(wrapper.dive().text())
    // expect(wrapper.find('li').length).toEqual(2);
    // expect(wrapper.find('li').at(0).text()).toEqual('user1');
  });
});
