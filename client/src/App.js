import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { graphql } from 'react-apollo'
import requireAuth from './components/requireAuth'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import CounterContainer from './containers/Counter'
import UserListContainer from './containers/UserList'
import WeatherContainer from './containers/Weather'
import UsersGraphQL from './components/UsersGraphQL' //eslint-disable-line
import Profile from './components/Profile'
import LoginModal from './components/LoginModal'
import LogoutModal from './components/LogoutModal'
import RegisterModal from './components/RegisterModal'

import './App.css'
import query from './graphql/queries/currentUserQuery'

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header getCurrentUser={this.props.data.getCurrentUser} loading={this.props.data.loading} />
        <div className="ui">{this.props.children}</div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={requireAuth(CounterContainer)} />
          <Route path="/users" component={requireAuth(UserListContainer)} />
          <Route path="/gqlusers" component={requireAuth(UsersGraphQL)} />
          <Route path="/weather" component={WeatherContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginModal} />
          <Route path="/logout" component={LogoutModal} />
          <Route path="/register" component={RegisterModal} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
}

// export default App
// export default withRouter(graphql(query)(App))
export default graphql(query)(App)
