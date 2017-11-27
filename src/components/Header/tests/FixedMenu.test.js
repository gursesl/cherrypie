import React from 'react'
import { shallow } from 'enzyme'
import '../../../setupTests'
import FixedMenu from '../FixedMenu'

describe('FixedMenu', () => {
  const props = {
    data: {
      loading: false,
      getCurrentUser: {
        id: 123,
        email: 'email@email.com',
        fullName: 'John Smith',
      },
    },
  }
  const container = shallow(<FixedMenu.WrappedComponent {...props} />)
  it('should render without blowing up', () => {
    expect(container).toBeDefined()
  })

  it('renders itself into the DOM with the correct shallowComponent styles', () => {
    expect(container).toMatchSnapshot();
  });
})
