/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal, Form, Checkbox, Grid, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class RegisterModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    // const { open, dimmer } = this.state

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
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="Full name"
                    />
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

                    <Form.Field label="Account type" control="select">
                      <option value="user">Regular User</option>
                      <option value="family">Family Member</option>
                      <option value="caregiver">Caregiver</option>
                      <option value="provider">Provider</option>
                    </Form.Field>

                    <Form.Field width="10">
                      <Checkbox label="I agree with the terms &amp; conditions" />
                    </Form.Field>

                    <Button color="teal" fluid size="large" onClick={this.handleClose}>Create Account</Button>
                  </Segment>
                </Form>
                <Message>
                  Already have an account? <Link to="/" onClick={this.handleClose}>Sign in</Link>
                </Message>
              </Grid.Column>
            </Grid>

          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default RegisterModal
