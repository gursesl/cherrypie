import React, { Component } from 'react'
import { Popup, Button, Modal, Form, Checkbox } from 'semantic-ui-react'

class LoginModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  success = () => {
    this.setState({ open: false })
    // alert('Login successful!')
  }

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Popup trigger={<Button color="teal" onClick={this.show(true)}>Login</Button>}>
          <Popup.Header>Login details</Popup.Header>
          <Popup.Content>
            Use your email or username to login to Cherrypie
          </Popup.Content>
        </Popup>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Form>
                <Form.Input label="Username" type="text" />
                <Form.Input label="Password" type="password" />
                <Form.Field>
                  <Checkbox label="Remember me for 30 days" />
                </Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" onClick={this.close}>Cancel</Button>
            <Button positive icon="sign in" labelPosition="right" content="Login" onClick={this.success} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default LoginModal
