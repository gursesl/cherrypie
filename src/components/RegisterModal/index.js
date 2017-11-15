/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Popup, Button, Header, Image, Modal, Grid, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import RegisterForm from './registerForm'
import RegistrationSuccessModal from './registrationSuccessModal'
import RegistrationFailureModal from './registrationFailureModal'
import usersListQuery from '../../graphql/queries/usersListQuery'
import findUserByEmailQuery from '../../graphql/queries/findUserByEmailQuery'
import registerMutation from '../../graphql/mutations/registerMutation'

class RegisterModal extends Component {
  state = {
    successModalOpen: false,
    failureModalOpen: false,
    errors: [],
  }
  handleOpen = () =>
    this.setState({
      modalOpen: true,
      successModalOpen: false,
      failureModalOpen: false,
    })
  handleClose = () =>
    this.setState({
      modalOpen: false,
      successModalOpen: false,
      failureModalOpen: false,
    })
  handleSuccess = () => this.setState({ modalOpen: false, successModalOpen: true })
  handleFailure = errors => this.setState({ modalOpen: false, failureModalOpen: true, errors })
  handleRegister = (values) => {
    const variables = values.toJS()
    this.props
      .mutate({
        variables,
        refetchQueries: [{ query: usersListQuery }, { query: findUserByEmailQuery, variables }],
      })
      .then((data) => {
        if (data.data.registerUser.user) {
          this.handleSuccess()
        } else {
          this.handleFailure(data.data.registerUser.errors)
        }
      })
      .catch((errors) => {
        if (errors.message) {
          this.handleFailure([{ message: errors.message, path: 'NetworkError' }])
        } else {
          this.handleFailure(errors.graphQLErrors)
        }
      })
  }

  render() {
    return (
      <div>
        <Popup trigger={<Button onClick={this.handleOpen}>Sign up</Button>}>
          <Popup.Header>Registration details</Popup.Header>
          <Popup.Content>Click here to sign up</Popup.Content>
        </Popup>

        <Modal open={this.state.modalOpen} onClose={this.handleClose} basic size="small">
          <Modal.Content>
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src="/img/logo.png" /> Sign up for a new account
                </Header>
                <RegisterForm {...this.props} onSubmit={this.handleRegister} />
                <Message>
                  Already have an account?{' '}
                  <Link to="/" onClick={this.handleClose}>
                    Sign in
                  </Link>
                </Message>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        <RegistrationSuccessModal
          successModalOpen={this.state.successModalOpen}
          handleClose={this.handleClose}
        />
        <RegistrationFailureModal
          successModalOpen={this.state.failureModalOpen}
          errors={this.state.errors}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

RegisterModal.propTypes = {
  mutate: PropTypes.func.isRequired,
}

export default graphql(registerMutation)(RegisterModal)
