import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'
import '../../../setupTests'
import LogoutModal from '..'
import Footer from '../../Footer'

const component = shallow(<LogoutModal />)

xdescribe('LogoutModal:index', () => {
  it('should be available', () => {
    expect(component.state().modalOpen).toBeFalsy()
    expect(component.find('Button').length).toBe(1)
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

  it('should be hidden when the Form Login button is clicked', () => {
    const modal = component.find('Modal')
    const cancelButton = component
      .find('Modal')
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
})
