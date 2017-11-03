import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'
import '../../../setupTests'
import LoginModal from '..'

const component = shallow(<LoginModal />)

describe('LoginModal:index', () => {
  it('should be available', () => {
    expect(component.state().open).toBeFalsy()
    expect(component.find('Modal').length).toBe(1)
    expect(component.find('Button').length).toBe(2)
    expect(component).toMatchSnapshot()
  })

  it('should hover correctly', () => {
    const button = component.find('Popup').dive().find('Portal')
    const buttonType = button.props().trigger.type
    expect(buttonType).toBe(Button)

    button.simulate('onMouseOver')
    // Hover delayed
    setTimeout(() => {
      expect(component.state().open).toBeTruthy()
    }, 0)

    button.simulate('onMouseOut')
    // Hover delayed
    setTimeout(() => {
      expect(component.state().open).toBeFalsy()
    }, 0)
  })

  // it('should have a correct show method implementation', () => {
  //   expect(component.state().open).toBeFalsy()
  //   component.instance().show(true, )

  //   setTimeout(() => {
  //     expect(component.state().open).toBeTruthy()
  //   }, 0)
  // })

  it('should be visible when the Login button is clicked', () => {
    const loginButton = component.find('Popup').dive().find('Portal')
    const modal = component.find('Modal')
    expect(modal.props().open).toBeFalsy()

    loginButton.simulate('click')
    // Click delayed
    setTimeout(() => {
      expect(modal.props().open).toBeTruthy()
    }, 0)
  })

  it('should be hidden when the Cancel button is clicked', () => {
    const modal = component.find('Modal')
    const cancelButton = component.find('Modal').find('Button').at(0)
    expect(modal.props().open).toBeFalsy()

    cancelButton.simulate('click')
    // Click delayed
    setTimeout(() => {
      expect(modal.props().open).toBeFalsy()
    }, 0)
  })

  it('should be hidden when the form Login button is clicked', () => {
    const modal = component.find('Modal')
    const formLoginButton = component.find('Modal').find('Button').at(1)
    expect(modal.props().open).toBeFalsy()

    formLoginButton.simulate('click')
    // Click delayed
    setTimeout(() => {
      expect(modal.props().open).toBeFalsy()
    }, 0)
  })
})
