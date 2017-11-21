import React, { Component } from 'react'
import { Header, Image, Modal, Grid, Message } from 'semantic-ui-react'
import LoginForm from '../LoginModal/loginForm'

class Profile extends Component {
  state = {
    modalOpen: true,
  }
  componentWillMount() {
    console.log(`This.props: ${this.props}`) //eslint-disable-line
    console.log(`This.state: ${this.state}`) //eslint-disable-line
  }

  handleClose = (e) => {
    // const { history } = this.props
    e.stopPropagation()
    this.setState({
      modalOpen: false,
      // successModalOpen: false,
      // failureModalOpen: false,
    })
    // history.goBack()
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>

        <Modal open={this.state.modalOpen} onClose={this.handleClose} basic size="small">
          <Modal.Content>
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src="/img/logo.png" /> Sign in
                </Header>
                <LoginForm {...this.props} onSubmit={this.handleLogin} />
                <Message>Don&#39;t have an account? </Message>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default Profile
