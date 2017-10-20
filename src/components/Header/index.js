import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import {
  Container,
  Menu,
  Segment,
  Visibility,
  Button,
} from 'semantic-ui-react'
import FixedMenu from './FixedMenu'
import LoginModal from '../LoginModal'
import LogoutModal from '../LogoutModal'

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = { visible: false };
  }

  hideFixedMenu() {
    this.setState({ visible: false })
  }

  showFixedMenu() {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state
    const fixedMenu = visible ? <FixedMenu /> : null;
    return (
      <div>
        {fixedMenu}
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                <Menu.Item as={NavLink} to="/users">Users</Menu.Item>
                <Menu.Item as={NavLink} to="/gqlusers">GQL Users</Menu.Item>
                <Menu.Item as={NavLink} to="/counter">Counter</Menu.Item>
                <Menu.Item as={NavLink} to="/weather">Weather</Menu.Item>
                <Menu.Item position="right">
                  <LoginModal />
                  <LogoutModal />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default withRouter(AppHeader)
// export default AppHeader
