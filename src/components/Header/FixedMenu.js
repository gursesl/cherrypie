import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
      <Menu.Item as={NavLink} to="/users">Users</Menu.Item>
      <Menu.Item as={NavLink} to="/counter">Counter</Menu.Item>
      <Menu.Item as={NavLink} to="/weather">Weather</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default withRouter(FixedMenu)
