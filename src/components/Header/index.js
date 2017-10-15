import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
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
                <Menu.Item as={NavLink} to="/counter">Counter</Menu.Item>
                <Menu.Item as={NavLink} to="/weather">Weather</Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default withRouter(AppHeader)
