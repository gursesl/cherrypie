import React from 'react'
import { gql, graphql } from 'react-apollo'

const UsersGraphQL = ({ data: {loading, error, users }}) => {
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

export default graphql(usersListQuery)(UsersGraphQL)
