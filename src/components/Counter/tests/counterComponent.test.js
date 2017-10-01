/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux';
import { mount } from 'enzyme'
import { expect } from 'chai'
import '../../../setupTests'
import CounterComponent from '../'
import { incrementAction, decrementAction, incrementActionAsync } from '../../../containers/CounterContainer/actions'

describe('<CounterComponent>', () => {

  const store = {
    getState: () => {
      return { value: 71 };
    },
    subscribe: () => {},
    dispatch: () => {}
  };

  let props = {
    value: 71,
    onIncrement: incrementAction,
    onDecrement: decrementAction,
    onIncrementAsync: incrementActionAsync
  }

  let component = mount(<Provider store={store}><CounterComponent {...props} /></Provider>)

  it('should be available', () => {
    expect(component.find('button').at(1).text()).to.equal('Increment')
  })

  it('should display the correct clicks', () => {
    expect(component.text()).to.contain('Clicked: 71 times')
  })

  it('should find Increment Async button and simulate a click', () => {
    component.find('button').at(0).simulate('click')
  })

  it('should find Increment button and simulate a click', () => {
    component.find('button').at(1).simulate('click')
  })

  it('should find Decrement button and simulate a click', () => {
    component.find('button').at(2).simulate('click')
  })

})
