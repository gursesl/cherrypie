/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Popup, Button, Header, Image, Modal, Grid, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import localforage from 'localforage'
import LoginForm from './loginForm'
import LoginSuccessModal from './loginSuccessModal'
import LoginFailureModal from './loginFailureModal'
import loginMutation from '../../graphql/mutations/loginMutation'
import usersListQuery from '../../graphql/queries/usersListQuery'
import findUserByEmailQuery from '../../graphql/queries/findUserByEmailQuery'

class LoginModal extends Component {
  state = {
    successModalOpen: false,
    failureModalOpen: false,
    errors: [],
  }
  saveToken = (key, value) => {
    localforage
      .setItem(key, value)
      .then(() => {
        // console.log(item)
      })
      .catch(() => {
        // console.log(err)
      })
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
  handleLogin = (values) => {
    const variables = values.toJS()

    this.props
      .mutate({
        variables,
        refetchQueries: [
          { query: usersListQuery, variables },
          { query: findUserByEmailQuery, variables },
        ],
      })
      .then((response) => {
        const {
          ok, token, refreshToken, errors,
        } = response.data.loginUser
        if (ok) {
          this.saveToken('token', token)
          this.saveToken('refreshToken', refreshToken)
          this.handleSuccess()
        } else {
          this.handleFailure(errors)
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
        <Popup trigger={<Button onClick={this.handleOpen}>Sign in</Button>}>
          <Popup.Header>Sign in details</Popup.Header>
          <Popup.Content>Click here to sign in</Popup.Content>
        </Popup>

        <Modal open={this.state.modalOpen} onClose={this.handleClose} basic size="small">
          <Modal.Content>
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src="/img/logo.png" /> Sign in
                </Header>
                <LoginForm {...this.props} onSubmit={this.handleLogin} />
                <Message>
                  Don&#39;t have an account?{' '}
                  <Link to="/" onClick={this.handleClose}>
                    Sign up
                  </Link>
                </Message>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        <LoginSuccessModal
          successModalOpen={this.state.successModalOpen}
          handleClose={this.handleClose}
        />
        <LoginFailureModal
          successModalOpen={this.state.failureModalOpen}
          errors={this.state.errors}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

LoginModal.propTypes = {
  mutate: PropTypes.func.isRequired,
}

export default graphql(loginMutation)(LoginModal)
