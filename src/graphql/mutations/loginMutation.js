import gql from 'graphql-tag'

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
      token
      refreshToken
      id
    }
  }
`

export default loginMutation
