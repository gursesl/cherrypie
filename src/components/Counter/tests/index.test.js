/* eslint-disable no-unused-vars */
// REFERENCE: COMPONENT TEST
import React from 'react'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme'
import '../../../setupTests'
import CounterComponent from '../'

const onIncrementSpy = jest.fn()
const onDecrementSpy = jest.fn()
const onIncrementAsyncSpy = jest.fn()

const props = {
  value: 71,
  onIncrement: onIncrementSpy,
  onDecrement: onDecrementSpy,
  onIncrementAsync: onIncrementAsyncSpy,
}

const component = shallow(<CounterComponent {...props} />)

describe('CounterComponent:index', () => {
  it('should be available', () => {
    expect(component.find('button').at(1).text()).toEqual('Increment')
  })

  it('should display the correct clicks', () => {
    expect(component.text()).toContain('Clicked: 71 times')
  })

  it('should find Increment Async button and simulate a click', () => {
    component.find('button').at(0).simulate('click')
    expect(onIncrementAsyncSpy.mock.calls.length).toBe(1)
  })

  it('should find Increment button and simulate a click', () => {
    component.find('button').at(1).simulate('click')
    expect(onIncrementSpy.mock.calls.length).toBe(1)
  })

  it('should find Decrement button and simulate a click', () => {
    component.find('button').at(2).simulate('click')
    expect(onDecrementSpy.mock.calls.length).toBe(1)
  })
})
