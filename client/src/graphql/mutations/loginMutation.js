import gql from 'graphql-tag'

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      ok
      id
      owner
      errors {
        path
        message
      }
      token
      refreshToken
    }
  }
`

export default loginMutation
