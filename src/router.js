import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App'
import UserListContainer from './containers/UserListContainer'
import CounterContainer from './containers/CounterContainer'

const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/counter" component={CounterContainer} />
      <Route path="/users" component={UserListContainer} />
    </div>
  </Router>
)

export default AppRouter
