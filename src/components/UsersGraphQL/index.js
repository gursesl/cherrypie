import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const UsersGraphQL = ({ data: { loading, error, users } }) => {
  // console.log(`loading: ${loading} error: ${error} users: ${users}`)
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <ul>
      { users.map(user =>
        <li key={user.id}>{user.firstName} {user.lastName} ({user.email})</li>)}
    </ul>
  )
}

export const usersListQuery = gql`
  query UsersQuery {
    users {
      id
      userName
      password
      firstName
      lastName
      email
    }
  }
`

UsersGraphQL.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    users: PropTypes.array,
  }).isRequired,
}

export default graphql(usersListQuery)(UsersGraphQL)
// export default UsersGraphQL
