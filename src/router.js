import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App'
import Home from './components/Home'
import UserListContainer from './containers/UserListContainer'
import CounterContainer from './containers/CounterContainer'
import WeatherContainer from './containers/WeatherContainer'

const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={CounterContainer} />
        <Route path="/users" component={UserListContainer} />
        <Route path="/weather" component={WeatherContainer} />
      </Switch>
    </App>
  </Router>
)

export default AppRouter
