import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import currentUserQuery from '../../graphql/queries/currentUserQuery'

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.getCurrentUser) {
        nextProps.history.push('/login', { modalOpen: true })
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return graphql(currentUserQuery)(RequireAuth)
}
