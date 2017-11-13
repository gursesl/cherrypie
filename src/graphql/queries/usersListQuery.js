import gql from 'graphql-tag'

const usersListQuery = gql`
  query {
    getUsers {
      id
      email
      password
      fullName
      address
      userType
    }
  }
`

export default usersListQuery
