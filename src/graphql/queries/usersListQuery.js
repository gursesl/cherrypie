import gql from 'graphql-tag'

const usersListQuery = gql`
  query {
    getUsers {
      ok
      users {
        id
        fullName
        email
      }
      errors {
        path
        message
      }
    }
  }
`

export default usersListQuery
