/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import localforage from 'localforage'
import { graphql } from 'react-apollo'
import { Popup, Button, Header, Image, Modal, Form, Grid, Segment } from 'semantic-ui-react'
import logoutMutation from '../../graphql/mutations/logoutMutation'
import usersListQuery from '../../graphql/queries/usersListQuery'

class LogoutModal extends Component {
  state = { modalOpen: false }
  removeToken = (key) => {
    localforage
      .removeItem(key)
      .then(() => {
        // console.log(item)
      })
      .catch(() => {
        // console.log(err)
      })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleLogout = () => {
    this.removeToken('token')
    this.removeToken('refreshToken')
    this.props
      .mutate({
        variables: {},
        refetchQueries: [{ query: usersListQuery }],
      })
      .then((response) => {
        const { ok } = response.data.logoutUser
        if (ok) {
          this.setState({ modalOpen: false })
          // TODO: Dispatch Logout action
        } else {
          // this.handleFailure(errors)
          // console.log('Logout failure')
        }
      })
      .catch(() => {
        // console.log(errors)
        // if (errors.message) {
        //   this.handleFailure([{ message: errors.message, path: 'NetworkError' }])
        // } else {
        //   this.handleFailure(errors.graphQLErrors)
        // }
      })
  }

  render() {
    // const { open, dimmer } = this.state

    return (
      <div>
        <Popup trigger={<Button onClick={this.handleOpen}>Logout</Button>}>
          <Popup.Header>Logout details</Popup.Header>
          <Popup.Content>Click here to logout</Popup.Content>
        </Popup>

        <Modal open={this.state.modalOpen} onClose={this.handleClose} basic size="small">
          <Modal.Content>
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src="/img/logo.png" /> Confirm log-out
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Button color="teal" fluid size="large" onClick={this.handleLogout}>
                      Logout
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

LogoutModal.propTypes = {
  mutate: PropTypes.func.isRequired,
}

export default graphql(logoutMutation)(LogoutModal)
