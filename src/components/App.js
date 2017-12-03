import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import AppHeader from './Header'
import Footer from './Footer'
import query from '../graphql/queries/currentUserQuery'

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <AppHeader
          getCurrentUser={this.props.data.getCurrentUser}
          loading={this.props.data.loading}
        />
        <div className="ui">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default withRouter(graphql(query)(App))
