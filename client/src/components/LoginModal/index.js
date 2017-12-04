/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Popup, Button, Header, Image, Modal, Grid, Message } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { withRouter, Link } from 'react-router-dom'
import localforage from 'localforage'
import LoginForm from './loginForm'
import LoginSuccessModal from './loginSuccessModal'
import LoginFailureModal from './loginFailureModal'
import loginMutation from '../../graphql/mutations/loginMutation'
import usersListQuery from '../../graphql/queries/usersListQuery'
import currentUserQuery from '../../graphql/queries/currentUserQuery'
import logo from './logo.png'
// import findUserByEmailQuery from '../../graphql/queries/findUserByEmailQuery'

class LoginModal extends Component {
  state = {
    successModalOpen: false,
    failureModalOpen: false,
    next: null,
    errors: [],
  }

  componentWillMount() {
    console.log(`LoginModal:cwm: ${JSON.stringify(this.props)}`)
    if (this.props.location && this.props.location.state) {
      const { modalOpen, next } = this.props.location.state
      // const { next } = this.state
      this.setState({ modalOpen, next })
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.location && nextProps.location.state) {
  //     this.setState({ modalOpen: true })
  //   }
  // }

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

  handleSuccess = () => {
    console.log('handleSuccess')
    console.log(this.props)
    console.log(this.state)
    // this.setState({ modalOpen: false, successModalOpen: true })
    // debugger
    this.setState({ modalOpen: false })
    if (this.state.next) {
      // this.context.history.push(this.state.next)
      // setTimeout(() => {
      this.props.history.push(this.state.next)
      // }, 10)
    }
  }

  handleFailure = errors => this.setState({ modalOpen: false, failureModalOpen: true, errors })
  handleLogin = (values) => {
    const variables = values.toJS()
    this.props
      .mutate({
        variables,
        // refetchQueries: [
        //   // { query: usersListQuery, variables },
        //   { query: currentUserQuery },
        //   // { query: findUserByEmailQuery, variables },
        // ],
        update: (proxy, { data: { loginUser } }) => {
          // Read the data from our cache for this query.
          const data = proxy.readQuery({ query: currentUserQuery })

          // Add our user from the mutation to the end
          data.getCurrentUser = loginUser

          // Write our data back to the cache
          proxy.writeQuery({ query: currentUserQuery, data })
        },
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
                  <Image src={logo} /> Sign in
                </Header>
                <LoginForm {...this.props} onSubmit={this.handleLogin} />
                <Message>
                  Don&#39;t have an account?{' '}
                  <Link
                    href="/register"
                    to={{
                      pathname: '/register',
                      state: { modalOpen: true },
                    }}
                  >
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      modalOpen: PropTypes.bool,
    }),
  }),
}

LoginModal.defaultProps = {
  location: {
    state: {
      modalOpen: false,
    },
  },
}

export default withRouter(graphql(loginMutation)(LoginModal))
