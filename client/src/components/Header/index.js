import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Menu, Segment, Visibility } from 'semantic-ui-react'
import FixedMenu from './FixedMenu'
import renderButtons from './renderButtons'

class Header extends Component {
  constructor(props) {
    super(props)
    this.hideFixedMenu = this.hideFixedMenu.bind(this)
    this.showFixedMenu = this.showFixedMenu.bind(this)
    this.state = { visible: false }
  }

  hideFixedMenu() {
    this.setState({ visible: false })
  }

  showFixedMenu() {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state
    const { loading, getCurrentUser } = this.props
    const fixedMenu = visible ? <FixedMenu {...this.props} /> : null
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
                <Menu.Item>
                  <Link
                    href="/profile"
                    to={{
                      pathname: '/profile',
                      state: { modal: true },
                    }}
                  >
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/login"
                    to={{
                      pathname: '/login',
                      state: { modalOpen: true },
                    }}
                  >
                    Login
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/logout"
                    to={{
                      pathname: '/logout',
                      state: { modalOpen: true },
                    }}
                  >
                    Logout
                  </Link>
                </Menu.Item>
                {renderButtons(loading, getCurrentUser)}
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </div>
    )
  }
}

// export default withRouter(AppHeader)
// export default graphql(query)(AppHeader)
export default Header
