
describe('RegisterModal:index', () => {
  it('should be fixed to support a mock client with a default WebSocket implementation', () => {
    console.log('Fix this test')
  })
})

// import React from 'react'
// import { shallow } from 'enzyme'
// import { Button } from 'semantic-ui-react'
// import '../../../setupTests'
// import RegisterModal from '..'
// import Footer from '../../Footer'

// const component = shallow(<RegisterModal />).dive()

// describe('RegisterModal:index', () => {
//   xit('should be available', () => {
//     expect(component.state().modalOpen).toBeFalsy()
//     expect(component.find('Modal').length).toBe(1)
//     expect(component.find('ReduxForm').length).toBe(1)
//     expect(component.find('RegistrationSuccessModal').length).toBe(1)
//   })

//   xit('should hover correctly', () => {
//     const button = component.find('Popup').dive().find('Portal')
//     const buttonType = button.props().trigger.type
//     expect(buttonType).toBe(Button)

//     button.simulate('onMouseOver')
//     // Hover delayed
//     setTimeout(() => {
//       expect(component.state().modalOpen).toBeTruthy()
//     }, 0)

//     button.simulate('onMouseOut')
//     // Hover delayed
//     setTimeout(() => {
//       expect(component.state().modalOpen).toBeFalsy()
//     }, 0)

//     expect(component).toMatchSnapshot()
//   })

//   xit('should have a correct show method implementation', () => {
//     expect(component.state().modalOpen).toBeFalsy()
//     component.instance().handleOpen()

//     setTimeout(() => {
//       expect(component.state().modalOpen).toBeTruthy()
//     }, 0)
//   })

//   xit('should be visible when the NavBar Login button is clicked', () => {
//     const loginButton = component.find('Popup').dive().find('Portal')
//     const modal = component.find('Modal')
//     expect(modal.props().modalOpen).toBeFalsy()

//     loginButton.simulate('click')
//     // Click delayed
//     setTimeout(() => {
//       expect(modal.props().modalOpen).toBeTruthy()
//     }, 0)

//     expect(component).toMatchSnapshot()
//   })

//   // TODO: Move this to test Redux Form
//   xit('should be hidden when the Form Login button is clicked', () => {
//     const modal = component.find('Modal')
//     const cancelButton = component.find('ReduxForm').find('Button').at(0)
//     expect(modal.props().modalOpen).toBeFalsy()

//     cancelButton.simulate('click')
//     // Click delayed
//     setTimeout(() => {
//       expect(modal.props().modalOpen).toBeFalsy()
//     }, 0)

//     expect(component).toMatchSnapshot()
//   })

//   xit('should be hidden when clicked outside the modal', () => {
//     const modal = component.find('Modal')
//     const footer = shallow(<Footer />)

//     footer.simulate('click')
//     // Click delayed
//     setTimeout(() => {
//       expect(modal.props().modalOpen).toBeFalsy()
//     }, 0)

//     expect(component).toMatchSnapshot()
//   })

//   xit('should be an instance of redux-form HOC', () => {

//   })

//   xit('should have four form fields', () => {
//     // Full name
//     // Email address
//     // Password
//     // Account type
//     // Agree checkbox
//     // Submit button
//   })

//   xit('should validate the form', () => {
//     // Full name
//     // Email address
//     // Password
//     // Account type
//     // Agree checkbox
//     // Submit button
//   })

//   xit('should submit the form', () => {

//   })
// })
