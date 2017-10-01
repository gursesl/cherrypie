/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import '../../../setupTests'
import CounterContainer from '../index'
import Counter from '../../../components/Counter'

describe('<CounterContainer>', () => {
  const store = {
    getState: () => {
      return { value: 7 };
    },
    subscribe: () => {},
    dispatch: () => {}
  };

  let container = mount(<Provider store={store}><CounterContainer /></Provider>)
  let component = container.find('Counter')

  it('should be available', () => {
    expect(container.text()).to.include('Counter')
  })

  it('should have a CounterComponent', () => {
    expect(component.length).to.equal(1)
  })

})
