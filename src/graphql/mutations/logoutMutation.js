import gql from 'graphql-tag'

const logoutMutation = gql`
  mutation {
    logoutUser {
      ok
      errors {
        path
        message
      }
      token
      refreshToken
    }
  }
`

export default logoutMutation
