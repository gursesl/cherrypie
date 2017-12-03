import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import currentUserQuery from '../../graphql/queries/currentUserQuery'

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      console.log('cwm')
      console.log(`componentWillMount:Props ${JSON.stringify(this.props)}`)
      const { loading, getCurrentUser } = this.props.data
      if (!getCurrentUser) {
        this.props.history.push('/login', { modalOpen: true })
      }
    }

    componentWillUpdate(nextProps) {
      console.log('cwu')
      if (!nextProps.data.loading && !nextProps.data.getCurrentUser) {
        nextProps.history.push('/login', { modalOpen: true })
      }
    }

    render() {
      const { loading, getCurrentUser } = this.props.data
      console.log(`render:Props ${JSON.stringify(this.props)}`)
      if (!getCurrentUser) {
        this.props.history.push('/login', { modalOpen: true })
        return <p>Redirecting...</p>
      }

      return (
        <WrappedComponent
          {...this.props}
          otherProp
          user={this.props.data.getCurrentUser}
          owner={this.props.data.getCurrentUser.id}
        />
      )
    }
  }

  return graphql(currentUserQuery)(RequireAuth)
}
