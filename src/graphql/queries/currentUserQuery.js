import gql from 'graphql-tag'

const currentUserQuery = gql`
  query {
    getCurrentUser {
        id
        fullName
        email
    }
  }
`

export default currentUserQuery
