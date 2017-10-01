import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import '../setupTests';
import CherryPieHeader from './cherryPieHeader'; // eslint-disable-line no-unused-vars

describe('CherryPieHeader', () => {

  let wrapper = shallow(<CherryPieHeader />)

  it('should contain a certain text', () => {
    expect(wrapper.render().text()).toContain('Header')
  });

  it('should contain a certain h1', () => {
    expect(wrapper.find('h1').at(0).text()).toEqual('Header')
  });
});
