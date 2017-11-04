import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const UsersGraphQL = ({ data: { loading, error, getUsers } }) => {
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

  if (getUsers.length === 0) {
    return (
      <p>No users found.</p>
    )
  }

  return (
    <ul>
      { getUsers.map(user =>
        <li key={user.id}>{user.firstName} {user.lastName} ({user.email})</li>)}
    </ul>
  )
}

export const usersListQuery = gql`
  query {
    getUsers {
      id
      userName
      password
      firstName
      lastName
      email
      userType
    }
  }
`

UsersGraphQL.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    getUsers: PropTypes.array,
  }).isRequired,
}

export default graphql(usersListQuery)(UsersGraphQL)
// export default UsersGraphQL
