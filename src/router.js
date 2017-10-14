import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import UserListContainer from './containers/UserListContainer'
import CounterContainer from './containers/CounterContainer'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/counter" component={CounterContainer} />
      <Route path="/users" component={UserListContainer} />
    </div>
  </Router>
)

export default AppRouter
