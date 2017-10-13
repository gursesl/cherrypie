/* eslint-disable no-unused-vars */
// REFERENCE: COMPONENT TEST
import React from 'react'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme'
import '../../../setupTests'
import UserComponent from '../'

const onFetchUsersSpy = jest.fn()
// const onDecrementSpy = jest.fn()
// const onIncrementAsyncSpy = jest.fn()

const props = {
  users: [
    {
      id: 95617189,
      firstName: 'Elfrieda',
      lastName: 'Frank',
      email: 'Ada20@hotmail.com',
    },
    {
      id: 95617188,
      firstName: 'Jim',
      lastName: 'Smith',
      email: 'jsmith@mail.com',
    },
  ],
  error: 'Error',
  isLoading: true,
  onFetchUsers: onFetchUsersSpy,
}

const component = shallow(<UserComponent {...props} />)
// console.log(component.debug())

describe('UserComponent:index', () => {
  it('should be available', () => {
    expect(component.find('button').at(0).text()).toEqual('Fetch Users')
  })

  it('should find Increment Async button and simulate a click', () => {
    component.find('button').at(0).simulate('click')
    expect(onFetchUsersSpy.mock.calls.length).toBe(1)
  })
})
