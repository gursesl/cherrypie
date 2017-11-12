import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'

class RegistrationFailureModal extends Component {
  state = {
    modalOpen: false,
    errors: [],
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalOpen: nextProps.successModalOpen,
      errors: nextProps.errors,
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  renderErrors = () => this.state.errors.map(error =>
    <li key={error.path}>{error.message}</li>)

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.props.handleClose}
        basic
        size="small"
      >
        <Header icon="user" content="Please try again" />
        <Modal.Content>
          <h3>There were errors in your submission.</h3>
          <ul>{this.renderErrors()}</ul>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={this.props.handleClose} inverted>
            <Icon name="checkmark" /> Try again
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

RegistrationFailureModal.propTypes = {
  successModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
}

export default RegistrationFailureModal
