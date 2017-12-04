import gql from 'graphql-tag'

const usersListQuery = gql`
  query getUsers($owner: ID!) {
    getUsers(owner: $owner) {
      id
      fullName
      email
    }
  }
`

export default usersListQuery
