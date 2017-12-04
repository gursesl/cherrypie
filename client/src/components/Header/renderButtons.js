import React from 'react'
import { Menu } from 'semantic-ui-react'
import LoginModal from '../LoginModal'
import LogoutModal from '../LogoutModal'
import RegisterModal from '../RegisterModal'

const renderButtons = (loading, user) => {
  if (loading) return <div />

  if (user) {
    return (
      <Menu.Item position="right">
        <RegisterModal />
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

export default renderButtons
