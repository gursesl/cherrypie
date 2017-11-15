import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'

class LoginSuccessModal extends Component {
  state = {
    modalOpen: false,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalOpen: nextProps.successModalOpen,
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal open={this.state.modalOpen} onClose={this.props.handleClose} basic size="small">
        <Header icon="user" content="Hooray!" />
        <Modal.Content>
          <h3>You have been logged in succcessfully.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.props.handleClose} inverted>
            <Icon name="checkmark" /> Start
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

LoginSuccessModal.propTypes = {
  successModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default LoginSuccessModal
