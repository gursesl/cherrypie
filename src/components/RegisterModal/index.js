/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Popup, Button, Header, Image, Modal, Grid, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import RegisterForm from './registerForm'
import RegistrationSuccessModal from './registrationSuccessModal'

class RegisterModal extends Component {
  state = {
    successModalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true, successModalOpen: false })
  handleClose = () => this.setState({ modalOpen: false, successModalOpen: false })
  handleSuccess = () => this.setState({ modalOpen: false, successModalOpen: true })
  handleFailure = (error) => console.log('there was an error sending the query', error) //eslint-disable-line

  handleRegister = (values) => {
    const variables = values.toJS()
    this.props.mutate({
      variables,
    }).then((data) => {
      if (data.data.registerUser.id) {
        this.handleSuccess()
      } else {
        this.handleFailure('There was an error with your registration.')
      }
    })
      .catch(error => this.handleFailure(error))
  }

  render() {
    return (
      <div>
        <Popup trigger={<Button onClick={this.handleOpen}>Sign up</Button>}>
          <Popup.Header>Registration details</Popup.Header>
          <Popup.Content>
            Click here to sign up
          </Popup.Content>
        </Popup>

        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="small"
        >
          <Modal.Content>
            <Grid
              textAlign="center"
              style={{ height: '100%' }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src="/img/logo.png" />
                  {' '}Sign up for a new account
                </Header>
                <RegisterForm {...this.props} onSubmit={this.handleRegister} />
                <Message>
                  Already have an account? <Link to="/" onClick={this.handleClose}>Sign in</Link>
                </Message>
              </Grid.Column>
            </Grid>

          </Modal.Content>
        </Modal>
        <RegistrationSuccessModal
          successModalOpen={this.state.successModalOpen}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

const registerMutation = gql`
  mutation registerUser(
    $password: String!,
    $fullName: String!,
    $email: String!,
    $address:String,
    $address2: String,
    $city: String,
    $state: String,
    $zip: String,
    $userType: String!) {
    registerUser(
      password: $password,
      fullName: $fullName,
      email: $email,
      address: $address,
      address2: $address2,
      city: $city,
      state: $state,
      zip: $zip,
      userType: $userType
    )
    {
      id
    }
  }
`

RegisterModal.propTypes = {
  mutate: PropTypes.func.isRequired,
}

export default graphql(registerMutation)(RegisterModal)
