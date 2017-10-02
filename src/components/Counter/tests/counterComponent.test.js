/* eslint-disable no-unused-vars */
// REFERENCE: COMPONENT TEST
import React from 'react'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import '../../../setupTests'
import CounterComponent from '../'

const onIncrementSpy = sinon.spy();
const onDecrementSpy = sinon.spy();
const onIncrementAsyncSpy = sinon.spy();

const props = {
  value: 71,
  onIncrement: onIncrementSpy,
  onDecrement: onDecrementSpy,
  onIncrementAsync: onIncrementAsyncSpy
}

let component = shallow(<CounterComponent {...props} />)


describe('<CounterComponent>', () => {

  beforeEach(() => {

  })

  afterEach(() => {

  })

  it('should be available', () => {
    expect(component.find('button').at(1).text()).to.equal('Increment')
  })

  it('should display the correct clicks', () => {
    expect(component.text()).to.contain('Clicked: 71 times')
  })

  it('should find Increment Async button and simulate a click', () => {
    component.find('button').at(0).simulate('click')
    expect(onIncrementAsyncSpy.calledOnce).to.equal(true)
  })

  it('should find Increment button and simulate a click', () => {
    component.find('button').at(1).simulate('click')
    expect(onIncrementSpy.calledOnce).to.equal(true)
  })

  it('should find Decrement button and simulate a click', () => {
    component.find('button').at(2).simulate('click')
    expect(onDecrementSpy.calledOnce).to.equal(true);
  })

})
