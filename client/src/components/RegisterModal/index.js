/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Popup, Button, Header, Image, Modal, Grid, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import RegisterForm from './registerForm'
import RegistrationSuccessModal from './registrationSuccessModal'
import RegistrationFailureModal from './registrationFailureModal'
// import usersListQuery from '../../graphql/queries/usersListQuery'
// import findUserByEmailQuery from '../../graphql/queries/findUserByEmailQuery'
import registerMutation from '../../graphql/mutations/registerMutation'
import logo from './logo.png'

class RegisterModal extends Component {
  state = {
    successModalOpen: false,
    failureModalOpen: false,
    errors: [],
  }

  componentWillMount() {
    if (this.props.location && this.props.location.state) {
      const { modalOpen } = this.props.location.state
      this.setState({ modalOpen })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location && nextProps.location.state) {
      this.setState({ modalOpen: true })
    }
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
        refetchQueries: [
          // { query: usersListQuery, variables },
          // { query: findUserByEmailQuery, variables },
        ],
      })
      .then(({ data }) => {
        if (data.registerUser.user) {
          this.handleSuccess()
        } else {
          this.handleFailure(data.registerUser.errors)
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
                  <Image src={logo} /> Sign up for a new account
                </Header>
                <RegisterForm {...this.props} onSubmit={this.handleRegister} />
                <Message>
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    to={{
                      pathname: '/login',
                      state: { modalOpen: true },
                    }}
                  >
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      modalOpen: PropTypes.bool,
    }),
  }),
}

RegisterModal.defaultProps = {
  location: {
    state: {
      modalOpen: false,
    },
  },
}

export default graphql(registerMutation)(RegisterModal)
