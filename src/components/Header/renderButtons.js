import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import LoginModal from '../LoginModal'
import LogoutModal from '../LogoutModal'
import RegisterModal from '../RegisterModal'

const renderButtons = (props) => {
  const { loading, getCurrentUser } = props.data
  if (loading) return <div />

  if (getCurrentUser) {
    return (
      <Menu.Item position="right">
        <LogoutModal />
      </Menu.Item>
    )
  }
  return (
    <Menu.Item position="right">
      <LoginModal />
      <RegisterModal />
    </Menu.Item>
  )
}

renderButtons.propTypes = {
  data: PropTypes.shape.isRequired,
}

export default renderButtons
