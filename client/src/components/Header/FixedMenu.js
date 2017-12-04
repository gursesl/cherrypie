import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import renderButtons from './renderButtons'

const FixedMenu = data => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as={NavLink} to="/" exact>
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/users">
        Users
      </Menu.Item>
      <Menu.Item as={NavLink} to="/gqlusers">
        GQL Users
      </Menu.Item>
      <Menu.Item as={NavLink} to="/counter">
        Counter
      </Menu.Item>
      <Menu.Item as={NavLink} to="/weather">
        Weather
      </Menu.Item>
      <Menu.Menu position="right">{renderButtons(data)}</Menu.Menu>
    </Container>
  </Menu>
)

export default withRouter(FixedMenu)
