import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import currentUserQuery from '../../graphql/queries/currentUserQuery'

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      // console.log(this.props.match.path)
      console.log(`RequireAuth:cwm ${JSON.stringify(this.props)}`)
      const { loading, getCurrentUser } = this.props.data
      if (!loading && !getCurrentUser) {
        this.props.history.push('/login', { modalOpen: true, next: this.props.match.path })
      }
    }

    // componentWillUpdate(nextProps) {
    //   console.log(`RequireAuth:cwu: ${JSON.stringify(nextProps)} `)
    //   console.log(nextProps.match.path)
    //   if (!nextProps.data.loading && !nextProps.data.getCurrentUser) {
    //     this.props.history.push('/login', { modalOpen: true, next: nextProps.match.path })
    //   }
    // }

    render() {
      const { loading, getCurrentUser } = this.props.data
      // console.log(`render:Props ${JSON.stringify(this.props)}`)
      // console.log(this.props.match.path)
      if (loading) {
        return <p>Loading...</p>
      }

      if (!getCurrentUser) {
        // this.props.history.push('/login', { modalOpen: true, next: this.props.match.path })
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

  return withRouter(graphql(currentUserQuery)(RequireAuth))
}
