/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal, Form, Checkbox, Grid, Message, Segment } from 'semantic-ui-react'

class LogoutModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  success = () => {
    // this.setState({ open: false })
    // alert('Login successful!')
  }

  render() {
    // const { open, dimmer } = this.state

    return (
      <div>
        <Popup trigger={<Button onClick={this.handleOpen}>Logout</Button>}>
          <Popup.Header>Logout details</Popup.Header>
          <Popup.Content>
            Click here to logout
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
                  {' '}Log-in to your account
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />
                    <Form.Field width="8">
                      <Checkbox label="Remember me for 30 days" />
                    </Form.Field>

                    <Button color="teal" fluid size="large" onClick={this.handleClose}>Login</Button>
                  </Segment>
                </Form>
                <Message>
                  Don\&quot;t have an account? <a href="#" onClick={this.handleClose}>Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>

          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default LogoutModal
