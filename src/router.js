import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App'
import Home from './components/Home'
import UserListContainer from './containers/UserListContainer'
import CounterContainer from './containers/CounterContainer'
import WeatherContainer from './containers/WeatherContainer'
import UsersGraphQL from './components/UsersGraphQL' //eslint-disable-line
import Profile from './components/Profile'
import LoginModal from './components/LoginModal'
import LogoutModal from './components/LogoutModal'
import RegisterModal from './components/RegisterModal'

const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={CounterContainer} />
        <Route path="/users" component={UserListContainer} />
        <Route path="/gqlusers" component={UsersGraphQL} />
        <Route path="/weather" component={WeatherContainer} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={LoginModal} />
        <Route path="/logout" component={LogoutModal} />
        <Route path="/register" component={RegisterModal} />
      </Switch>
    </App>
  </Router>
)

export default AppRouter
