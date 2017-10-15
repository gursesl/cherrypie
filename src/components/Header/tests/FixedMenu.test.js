import React from 'react'
import { shallow } from 'enzyme'
import '../../../setupTests'
import FixedMenu from '../FixedMenu'

describe('FixedMenu', () => {
  const container = shallow(<FixedMenu.WrappedComponent />)
  it('should render without blowing up', () => {
    expect(container).toBeDefined()
  })

  it('renders itself into the DOM with the correct shallowComponent styles', () => {
    expect(container).toMatchSnapshot();
  });
})
