/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { shallow, mount, render, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });
sinon.spy(App.prototype, 'componentDidMount');

describe('<App />', () => {

  it('should render <UserList>', () => {
    expect(shallow(<App />).find('Connect(UserList)').length).to.equal(1);
  });

  it('calls componentDidMount', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).to.contain('Hello React!');
    // expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should have a component called Header', () => {
    let app = shallow(<App />);
    expect(app.find('CherryPieHeader').length).to.equal(1);
  });

  it('should have a component called Main', () => {
    // expect(false).to.equal(true);
  });

  it('should have a component called Footer', () => {
    // expect(false).to.equal(true);
  });

});
