/* eslint-disable no-unused-vars */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import App from './App';

configure({ adapter: new Adapter() });

sinon.spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).to.contain('Hello React!');
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
