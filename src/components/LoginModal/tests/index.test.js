import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'
import '../../../setupTests'
import LoginModal from '..'
import Footer from '../../Footer'

const component = shallow(<LoginModal />).dive()

describe('LoginModal:index', () => {
  it('should be available', () => {
    expect(component.state().modalOpen).toBeFalsy()
    expect(component.find('Modal').length).toBe(1)
    expect(component.find('ReduxForm').length).toBe(1)
    expect(component.find('LoginSuccessModal').length).toBe(1)
  })

  it('should hover correctly', () => {
    const button = component
      .find('Popup')
      .dive()
      .find('Portal')
    const buttonType = button.props().trigger.type
    expect(buttonType).toBe(Button)

    button.simulate('onMouseOver')
    // Hover delayed
    setTimeout(() => {
      expect(component.state().modalOpen).toBeTruthy()
    }, 0)

    button.simulate('onMouseOut')
    // Hover delayed
    setTimeout(() => {
      expect(component.state().modalOpen).toBeFalsy()
    }, 0)

    expect(component).toMatchSnapshot()
  })

  it('should have a correct show method implementation', () => {
    expect(component.state().modalOpen).toBeFalsy()
    component.instance().handleOpen()

    setTimeout(() => {
      expect(component.state().modalOpen).toBeTruthy()
    }, 0)
  })

  it('should be visible when the NavBar Login button is clicked', () => {
    const loginButton = component
      .find('Popup')
      .dive()
      .find('Portal')
    const modal = component.find('Modal')
    expect(modal.props().modalOpen).toBeFalsy()

    loginButton.simulate('click')
    // Click delayed
    setTimeout(() => {
      expect(modal.props().modalOpen).toBeTruthy()
    }, 0)

    expect(component).toMatchSnapshot()
  })

  // TODO: Move this to test Redux Form
  xit('should be hidden when the Form Login button is clicked', () => {
    const modal = component.find('Modal')
    const cancelButton = component
      .find('ReduxForm')
      .find('Button')
      .at(0)
    expect(modal.props().modalOpen).toBeFalsy()

    cancelButton.simulate('click')
    // Click delayed
    setTimeout(() => {
      expect(modal.props().modalOpen).toBeFalsy()
    }, 0)

    expect(component).toMatchSnapshot()
  })

  it('should be hidden when clicked outside the modal', () => {
    const modal = component.find('Modal')
    const footer = shallow(<Footer />)

    footer.simulate('click')
    // Click delayed
    setTimeout(() => {
      expect(modal.props().modalOpen).toBeFalsy()
    }, 0)

    expect(component).toMatchSnapshot()
  })

  it('should be an instance of redux-form HOC', () => {})

  it('should have four form fields', () => {
    // Full name
    // Email address
    // Password
    // Account type
    // Agree checkbox
    // Submit button
  })

  it('should validate the form', () => {
    // Full name
    // Email address
    // Password
    // Account type
    // Agree checkbox
    // Submit button
  })

  it('should submit the form', () => {})
})
